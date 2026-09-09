# OctoFit Tracker Frontend

React 19 and Vite presentation tier for the OctoFit Tracker application.

## Environment

In GitHub Codespaces, `VITE_CODESPACE_NAME` must be defined so the frontend can reach the API on forwarded port 8000. Create `.env.local` in this directory:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

Vite only exposes variables prefixed with `VITE_`. Restart the development server after changing the file. When `VITE_CODESPACE_NAME` is unset, the frontend safely falls back to `http://localhost:8000/api` for local development.

## Commands

```bash
npm run dev
npm run build
npm run lint
```
