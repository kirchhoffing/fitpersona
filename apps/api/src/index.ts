/*
  API Entry Point
  Purpose: Sets up and starts the Express server for the FitPersona API, handling requests for workouts and health checks.
  Context: This is the main server file for the backend API, registering routes and middleware and providing endpoints for workout data and server health.
*/

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import workoutsRouter from './routes/workouts';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API is running' });
});

// Register routes
app.use('/api/workouts', workoutsRouter);

const PORT = process.env.PORT || 3001;

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Basic error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});