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
  'bent-over-row': {
    id: 'bent-over-row',
    name: 'Bent-Over Row',
    sets: 4,
    reps: '6-8',
    description: {
      en: 'Compound exercise targeting back and biceps',
      tr: 'Sırt ve biseps kaslarını hedefleyen temel egzersiz',
      de: 'Grundübung für Rücken und Bizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=vT2GjY_Umpw',
    imageUrl: '/exercises/bent-over-row.jpg',
    category: 'compound',
    equipment: ['barbell'],
    muscleGroups: ['back', 'biceps', 'lats'],
    difficulty: 'intermediate'
  },
    'plank': {
    id: 'plank',
    name: 'Plank',
    sets: 3,
    reps: '30-60 seconds',
    description: {
      en: 'Core exercise for stability and endurance',
      tr: 'Stabilite ve dayanıklılık için core egzersizi',
      de: 'Core-Übung für Stabilität und Ausdauer'
    },
    videoUrl: 'https://www.youtube.com/watch?v=pSHjTRCQxIw',
    imageUrl: '/exercises/plank.jpg',
    category: 'core',
    equipment: [],
    muscleGroups: ['core', 'abdominals', 'obliques'],
    difficulty: 'beginner'
  },
  'romanian-deadlift': {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift',
    sets: 3,
    reps: '10-12',
    description: {
      en: 'Hamstring and glute focused deadlift variation',
      tr: 'Hamstring ve glute odaklı deadlift varyasyonu',
      de: 'Kreuzheben-Variante für Beinbeuger und Gesäß'
    },
    videoUrl: 'https://www.youtube.com/watch?v=2SHsk9AzdjA',
    imageUrl: '/exercises/romanian-deadlift.jpg',
    category: 'compound',
    equipment: ['barbell'],
    muscleGroups: ['hamstrings', 'glutes', 'back'],
    difficulty: 'intermediate'
  },
  'shoulder-press': {
    id: 'shoulder-press',
    name: 'Shoulder Press',
    sets: 3,
    reps: '10-12',
    description: {
      en: 'Overhead press for shoulder strength',
      tr: 'Omuz gücü için overhead press',
      de: 'Überkopfdrücken für Schulterkraft'
    },
    videoUrl: 'https://www.youtube.com/watch?v=B-aVuyhvLHU',
    imageUrl: '/exercises/shoulder-press.jpg',
    category: 'compound',
    equipment: ['dumbbell'],
    muscleGroups: ['shoulders', 'triceps'],
    difficulty: 'intermediate'
  },
  'pullup': {
    id: 'pullup',
    name: 'Pull-up',
    sets: 3,
    reps: 'Maximum reps',
    description: {
      en: 'Bodyweight exercise for back and biceps',
      tr: 'Sırt ve biseps için vücut ağırlığı egzersizi',
      de: 'Körpergewichtsübung für Rücken und Bizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
    imageUrl: '/exercises/pullup.jpg',
    category: 'bodyweight',
    equipment: ['pullup bar'],
    muscleGroups: ['back', 'biceps', 'lats'],
    difficulty: 'intermediate'
  },
  'cable-biceps-curl': {
    id: 'cable-biceps-curl',
    name: 'Cable Biceps Curl',
    sets: 3,
    reps: '12-15',
    description: {
      en: 'Isolation exercise for biceps using cable machine',
      tr: 'Kablo makinesiyle biseps izolasyonu',
      de: 'Isolationsübung für Bizeps mit Kabelzug'
    },
    videoUrl: 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo',
    imageUrl: '/exercises/cable-biceps-curl.jpg',
    category: 'isolation',
    equipment: ['cable'],
    muscleGroups: ['biceps'],
    difficulty: 'beginner'
  },
  'cable-triceps-pushdown': {
    id: 'cable-triceps-pushdown',
    name: 'Cable Triceps Pushdown',
    sets: 3,
    reps: '12-15',
    description: {
      en: 'Isolation exercise for triceps using cable machine',
      tr: 'Kablo makinesiyle triseps izolasyonu',
      de: 'Isolationsübung für Trizeps mit Kabelzug'
    },
    videoUrl: 'https://www.youtube.com/watch?v=2-LAMcpzODU',
    imageUrl: '/exercises/cable-triceps-pushdown.jpg',
    category: 'isolation',
    equipment: ['cable'],
    muscleGroups: ['triceps'],
    difficulty: 'beginner'
  },
  'kettlebell-goblet-squat': {
    id: 'kettlebell-goblet-squat',
    name: 'Kettlebell Goblet Squat',
    sets: 3,
    reps: '12',
    description: {
      en: 'Squat variation using kettlebell for quads and glutes',
      tr: 'Kettlebell ile yapılan squat varyasyonu',
      de: 'Kniebeugen-Variante mit Kettlebell für Beine und Gesäß'
    },
    videoUrl: 'https://www.youtube.com/watch?v=6xwGFn-J_QA',
    imageUrl: '/exercises/kettlebell-goblet-squat.jpg',
    category: 'compound',
    equipment: ['kettlebell'],
    muscleGroups: ['quadriceps', 'glutes', 'core'],
    difficulty: 'beginner'
  },
  'pushup': {
    id: 'pushup',
    name: 'Push-up',
    sets: 3,
    reps: 'Maximum reps',
    description: {
      en: 'Bodyweight chest and triceps exercise',
      tr: 'Göğüs ve triseps için vücut ağırlığı egzersizi',
      de: 'Körpergewichtsübung für Brust und Trizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=_l3ySVKYVJ8',
    imageUrl: '/exercises/pushup.jpg',
    category: 'bodyweight',
    equipment: [],
    muscleGroups: ['chest', 'triceps', 'shoulders', 'core'],
    difficulty: 'beginner'
  },
  'dumbbell-row': {
    id: 'dumbbell-row',
    name: 'Dumbbell Row',
    sets: 3,
    reps: '10-12',
    description: {
      en: 'Rowing exercise for back using dumbbells',
      tr: 'Dambıl ile sırt çekiş egzersizi',
      de: 'Rudern mit Kurzhanteln für den Rücken'
    },
    videoUrl: 'https://www.youtube.com/watch?v=pYcpY20QaE8',
    imageUrl: '/exercises/dumbbell-row.jpg',
    category: 'compound',
    equipment: ['dumbbell'],
    muscleGroups: ['back', 'lats', 'biceps'],
    difficulty: 'beginner'
  },
  'leg-raise': {
    id: 'leg-raise',
    name: 'Leg Raise',
    sets: 3,
    reps: '15',
    description: {
      en: 'Core exercise for lower abdominals',
      tr: 'Alt karın kasları için core egzersizi',
      de: 'Core-Übung für die unteren Bauchmuskeln'
    },
    videoUrl: 'https://www.youtube.com/watch?v=l4kQd9eWclE',
    imageUrl: '/exercises/leg-raise.jpg',
    category: 'core',
    equipment: [],
    muscleGroups: ['core', 'abdominals'],
    difficulty: 'beginner'
  },
  'russian-twist': {
    id: 'russian-twist',
    name: 'Russian Twist',
    sets: 3,
    reps: '30 seconds',
    description: {
      en: 'Core rotational exercise for obliques',
      tr: 'Oblikler için core rotasyon egzersizi',
      de: 'Core-Rotationsübung für die seitlichen Bauchmuskeln'
    },
    videoUrl: 'https://www.youtube.com/watch?v=wkD8rjkodUI',
    imageUrl: '/exercises/russian-twist.jpg',
    category: 'core',
    equipment: [],
    muscleGroups: ['core', 'obliques'],
    difficulty: 'beginner'
  },
// ... add more exercises as needed ...
}; 