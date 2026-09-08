import { connectDatabase } from '../config/database.js';
import { Activity } from '../models/activity.js';
import { LeaderboardEntry } from '../models/leaderboard.js';
import { Team } from '../models/team.js';
import { User } from '../models/user.js';
import { Workout } from '../models/workout.js';
import mongoose from 'mongoose';

const users = [
  {
    username: 'alex.rivera',
    email: 'alex.rivera@example.com',
    firstName: 'Alex',
    lastName: 'Rivera',
    role: 'Captain',
    teamName: 'Cardio Crew',
    goal: 'Run a sub-25 minute 5K',
  },
  {
    username: 'maya.chen',
    email: 'maya.chen@example.com',
    firstName: 'Maya',
    lastName: 'Chen',
    role: 'Member',
    teamName: 'Strength Squad',
    goal: 'Build full-body strength',
  },
  {
    username: 'jordan.patel',
    email: 'jordan.patel@example.com',
    firstName: 'Jordan',
    lastName: 'Patel',
    role: 'Member',
    teamName: 'Cardio Crew',
    goal: 'Stay consistent with daily movement',
  },
];

const teams = [
  {
    name: 'Cardio Crew',
    coach: 'Taylor Morgan',
    city: 'Seattle',
    motto: 'Miles before meetings',
    memberCount: 12,
  },
  {
    name: 'Strength Squad',
    coach: 'Riley Brooks',
    city: 'Austin',
    motto: 'Strong reps, stronger habits',
    memberCount: 9,
  },
];

const activities = [
  {
    username: 'alex.rivera',
    activityType: 'Run',
    durationMinutes: 42,
    caloriesBurned: 430,
    activityDate: new Date('2026-09-01T13:30:00Z'),
    notes: 'Tempo run around the lake',
  },
  {
    username: 'maya.chen',
    activityType: 'Strength Training',
    durationMinutes: 55,
    caloriesBurned: 360,
    activityDate: new Date('2026-09-02T22:00:00Z'),
    notes: 'Lower-body strength session',
  },
  {
    username: 'jordan.patel',
    activityType: 'Cycling',
    durationMinutes: 60,
    caloriesBurned: 520,
    activityDate: new Date('2026-09-03T12:15:00Z'),
    notes: 'Commute plus hill repeats',
  },
];

const leaderboard = [
  {
    rank: 1,
    username: 'alex.rivera',
    teamName: 'Cardio Crew',
    totalPoints: 1840,
    weeklyMinutes: 265,
  },
  {
    rank: 2,
    username: 'jordan.patel',
    teamName: 'Cardio Crew',
    totalPoints: 1715,
    weeklyMinutes: 240,
  },
  {
    rank: 3,
    username: 'maya.chen',
    teamName: 'Strength Squad',
    totalPoints: 1620,
    weeklyMinutes: 220,
  },
];

const workouts = [
  {
    title: '5K Pace Builder',
    focusArea: 'Cardio endurance',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    suggestedFor: 'Runners improving race pace',
    exercises: ['Warm-up jog', 'Six 400m intervals', 'Cool-down walk'],
  },
  {
    title: 'Foundational Strength Circuit',
    focusArea: 'Full body strength',
    difficulty: 'Beginner',
    durationMinutes: 30,
    suggestedFor: 'Members building consistent strength habits',
    exercises: ['Goblet squats', 'Push-ups', 'Bent-over rows', 'Plank holds'],
  },
  {
    title: 'Recovery Mobility Flow',
    focusArea: 'Mobility',
    difficulty: 'All levels',
    durationMinutes: 20,
    suggestedFor: 'Active recovery days',
    exercises: ['Hip openers', 'Thoracic rotations', 'Hamstring flossing'],
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();

    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      LeaderboardEntry.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
