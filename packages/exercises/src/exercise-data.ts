import { Exercise, ExerciseCategory, Equipment, MuscleGroup, Difficulty } from './types';

// Centralized exercise database with all possible properties
export const exerciseDatabase: Record<string, Exercise> = {
  'barbell-squat': {
    id: 'barbell-squat',
    name: 'Barbell Squat',
    sets: 4,
    reps: '6-8',
    description: {
      en: 'Compound exercise targeting lower body',
      tr: 'Alt vücudu hedefleyen temel egzersiz',
      de: 'Grundübung für den Unterkörper'
    },
    videoUrl: 'https://www.youtube.com/watch?v=ultWZbUMPL8',
    imageUrl: '/exercises/barbell-squat.jpg',
    category: 'compound',
    equipment: ['barbell'],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'core'],
    difficulty: 'intermediate'
  },
  'bench-press': {
    id: 'bench-press',
    name: 'Bench Press',
    sets: 4,
    reps: '6-8',
    description: {
      en: 'Compound exercise targeting chest and triceps',
      tr: 'Göğüs ve triceps hedefleyen temel egzersiz',
      de: 'Grundübung für Brust und Trizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=rT7DgCr-3pg',
    imageUrl: '/exercises/bench-press.jpg',
    category: 'compound',
    equipment: ['barbell', 'bench'],
    muscleGroups: ['chest', 'triceps', 'shoulders'],
    difficulty: 'intermediate'
  },
  // ... rest of the exercises ...
}; 