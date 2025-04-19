import express from 'express';
import { prisma } from '@fitpersona/database';
import { threeDayFullBodyWorkout } from '../workouts/3dayFullBody';

const router = express.Router();

// Create a new workout program
router.post('/', async (req, res) => {
  try {
    const { userId, programName } = req.body;

    // Create the workout program
    const workout = await prisma.workout.create({
      data: {
        name: programName,
        userId: userId,
        description: '3-day full body workout program',
      },
    });

    // Create exercises for each day
    for (const day of threeDayFullBodyWorkout.days) {
      for (const exercise of day.exercises) {
        await prisma.exercise.create({
          data: {
            name: exercise.name, // Using English as default
            description: exercise.description.en,
            sets: exercise.sets,
            reps: parseInt(exercise.reps.split('-')[0]), // Taking the lower range
            workoutId: workout.id,
          },
        });
      }
    }

    res.json({ success: true, workout });
  } catch (error) {
    console.error('Error creating workout:', error);
    res.status(500).json({ error: 'Failed to create workout' });
  }
});

// Get all workouts for a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const workouts = await prisma.workout.findMany({
      where: { userId },
      include: { exercises: true },
    });
    res.json(workouts);
  } catch (error) {
    console.error('Error fetching workouts:', error);
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

export default router; 