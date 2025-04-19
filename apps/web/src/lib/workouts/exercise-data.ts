import { Exercise, ExerciseCategory, Equipment, MuscleGroup, Difficulty } from '@/types/exercise';

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
    name: 'Bent Over Row',
    sets: 4,
    reps: '8-10',
    description: {
      en: 'Compound exercise targeting back and biceps',
      tr: 'Sırt ve biceps hedefleyen temel egzersiz',
      de: 'Grundübung für Rücken und Bizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=kBWAon7ItDw',
    imageUrl: '/exercises/bent-over-row.jpg',
    category: 'compound',
    equipment: ['barbell'],
    muscleGroups: ['back', 'biceps', 'forearms'],
    difficulty: 'intermediate'
  },
  'plank': {
    id: 'plank',
    name: 'Plank',
    sets: 3,
    reps: '30-60 seconds',
    description: {
      en: 'Core strengthening exercise',
      tr: 'Core güçlendirme egzersizi',
      de: 'Rumpfstabilisierungsübung'
    },
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c',
    imageUrl: '/exercises/plank.jpg',
    category: 'core',
    equipment: ['bodyweight'],
    muscleGroups: ['core', 'abdominals'],
    difficulty: 'beginner'
  },
  'romanian-deadlift': {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift',
    sets: 3,
    reps: '10-12',
    description: {
      en: 'Compound exercise targeting hamstrings and lower back',
      tr: 'Hamstring ve bel bölgesini hedefleyen temel egzersiz',
      de: 'Grundübung für Oberschenkelrückseite und unteren Rücken'
    },
    videoUrl: 'https://www.youtube.com/watch?v=hCDzSR6bW10',
    imageUrl: '/exercises/romanian-deadlift.jpg',
    category: 'compound',
    equipment: ['barbell'],
    muscleGroups: ['hamstrings', 'glutes', 'back'],
    difficulty: 'intermediate'
  },
  'shoulder-press': {
    id: 'shoulder-press',
    name: 'Dumbbell Shoulder Press',
    sets: 3,
    reps: '10-12',
    description: {
      en: 'Compound exercise targeting shoulders',
      tr: 'Omuzları hedefleyen temel egzersiz',
      de: 'Grundübung für die Schultern'
    },
    videoUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog',
    imageUrl: '/exercises/shoulder-press.jpg',
    category: 'compound',
    equipment: ['dumbbell'],
    muscleGroups: ['shoulders', 'triceps'],
    difficulty: 'intermediate'
  },
  'pullup': {
    id: 'pullup',
    name: 'Pull-up or Lat Pulldown',
    sets: 3,
    reps: '8-10',
    description: {
      en: 'Compound exercise targeting back and biceps',
      tr: 'Sırt ve biceps hedefleyen temel egzersiz',
      de: 'Grundübung für Rücken und Bizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
    imageUrl: '/exercises/pullup.jpg',
    category: 'compound',
    equipment: ['pullup bar', 'bodyweight'],
    muscleGroups: ['back', 'biceps', 'forearms'],
    difficulty: 'intermediate'
  },
  'cable-biceps-curl': {
    id: 'cable-biceps-curl',
    name: 'Cable Biceps Curl',
    sets: 3,
    reps: '12-15',
    description: {
      en: 'Isolation exercise targeting biceps',
      tr: 'Biceps hedefleyen izolasyon egzersizi',
      de: 'Isolationsübung für den Bizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=NFzTWp2qpiE',
    imageUrl: '/exercises/cable-biceps-curl.jpg',
    category: 'isolation',
    equipment: ['cable'],
    muscleGroups: ['biceps', 'forearms'],
    difficulty: 'beginner'
  },
  'cable-triceps-pushdown': {
    id: 'cable-triceps-pushdown',
    name: 'Cable Triceps Pushdown',
    sets: 3,
    reps: '12-15',
    description: {
      en: 'Isolation exercise targeting triceps',
      tr: 'Triceps hedefleyen izolasyon egzersizi',
      de: 'Isolationsübung für den Trizeps'
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
      en: 'Functional exercise targeting lower body and core',
      tr: 'Alt vücut ve core hedefleyen fonksiyonel egzersiz',
      de: 'Funktionelle Übung für Unterkörper und Core'
    },
    videoUrl: 'https://www.youtube.com/watch?v=QrVgpDOLlgM',
    imageUrl: '/exercises/kettlebell-goblet-squat.jpg',
    category: 'functional',
    equipment: ['kettlebell'],
    muscleGroups: ['quadriceps', 'glutes', 'core'],
    difficulty: 'beginner'
  },
  'pushup': {
    id: 'pushup',
    name: 'Push-up or Incline Push-up',
    sets: 3,
    reps: 'Maximum reps',
    description: {
      en: 'Bodyweight exercise targeting chest and triceps',
      tr: 'Göğüs ve triceps hedefleyen vücut ağırlığı egzersizi',
      de: 'Körpergewichtsübung für Brust und Trizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
    imageUrl: '/exercises/pushup.jpg',
    category: 'bodyweight',
    equipment: ['bodyweight'],
    muscleGroups: ['chest', 'triceps', 'shoulders'],
    difficulty: 'beginner'
  },
  'dumbbell-row': {
    id: 'dumbbell-row',
    name: 'Dumbbell Row',
    sets: 3,
    reps: '10',
    description: {
      en: 'Compound exercise targeting back and biceps',
      tr: 'Sırt ve biceps hedefleyen temel egzersiz',
      de: 'Grundübung für Rücken und Bizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=roCP6wCXPqo',
    imageUrl: '/exercises/dumbbell-row.jpg',
    category: 'compound',
    equipment: ['dumbbell'],
    muscleGroups: ['back', 'biceps'],
    difficulty: 'beginner'
  },
  'leg-raise': {
    id: 'leg-raise',
    name: 'Hanging Leg Raise or Lying Leg Raise',
    sets: 3,
    reps: '15',
    description: {
      en: 'Core exercise targeting lower abs',
      tr: 'Alt karın bölgesini hedefleyen core egzersizi',
      de: 'Core-Übung für die untere Bauchmuskulatur'
    },
    videoUrl: 'https://www.youtube.com/watch?v=Pr1ieGZ5atk',
    imageUrl: '/exercises/leg-raise.jpg',
    category: 'core',
    equipment: ['bodyweight'],
    muscleGroups: ['abdominals', 'core'],
    difficulty: 'intermediate'
  },
  'russian-twist': {
    id: 'russian-twist',
    name: 'Russian Twist',
    sets: 3,
    reps: '30 seconds',
    description: {
      en: 'Core exercise targeting obliques',
      tr: 'Yan karın bölgesini hedefleyen core egzersizi',
      de: 'Core-Übung für die schrägen Bauchmuskeln'
    },
    videoUrl: 'https://www.youtube.com/watch?v=wkD8rjkodUI',
    imageUrl: '/exercises/russian-twist.jpg',
    category: 'core',
    equipment: ['bodyweight'],
    muscleGroups: ['obliques', 'core'],
    difficulty: 'beginner'
  }
}; 