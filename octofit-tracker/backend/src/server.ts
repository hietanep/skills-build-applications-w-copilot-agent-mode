import cors from 'cors';
import express from 'express';
import { connectDatabase } from './config/database.js';
import { Activity } from './models/activity.js';
import { LeaderboardEntry } from './models/leaderboard.js';
import { Team } from './models/team.js';
import { User } from './models/user.js';
import { Workout } from './models/workout.js';

const app = express();
const port = 8000;
const host = '0.0.0.0';
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

const resources = [
  { path: 'users', findAll: () => User.find().lean() },
  { path: 'teams', findAll: () => Team.find().lean() },
  { path: 'activities', findAll: () => Activity.find().lean() },
  { path: 'leaderboard', findAll: () => LeaderboardEntry.find().lean() },
  { path: 'workouts', findAll: () => Workout.find().lean() },
] as const;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiUrl: baseUrl });
});

app.get('/api/config', (_request, response) => {
  response.json({ apiUrl: baseUrl });
});

resources.forEach(({ path, findAll }) => {
  app.get(`/api/${path}/`, async (_request, response, next) => {
    try {
      const data = await findAll();
      response.json(data);
    } catch (error) {
      next(error);
    }
  });
});

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error);
  response.status(500).json({ error: 'Internal server error' });
});

connectDatabase()
  .then(() => {
    app.listen(port, host, () => {
      console.log(`OctoFit Tracker API listening at ${baseUrl}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to octofit_db:', error);
    process.exit(1);
  });
