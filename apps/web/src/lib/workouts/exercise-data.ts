import { Exercise } from '@/types/exercise';

// Centralized exercise database with all possible properties
export const exerciseDatabase: Record<string, Exercise> = {
  'barbell-squat': {
    id: 'barbell-squat',
    name: 'Barbell Squat',
    description: {
      en: 'Compound exercise targeting lower body',
      tr: 'Alt vücudu hedefleyen temel egzersiz',
      de: 'Grundübung für den Unterkörper'
    },
    videoUrl: 'https://www.youtube.com/watch?v=ultWZbUMPL8',
    imageUrl: '/exercises/BarbellSquat.png',
    category: 'compound',
    equipment: ['barbell'],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'core'],
    difficulty: 'intermediate',
    healthRisks: ['back_pain', 'knee_problem']
  },
  'bench-press': {
    id: 'bench-press',
    name: 'Bench Press',
    description: {
      en: 'Compound exercise targeting chest and triceps',
      tr: 'Göğüs ve triceps hedefleyen temel egzersiz',
      de: 'Grundübung für Brust und Trizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=rT7DgCr-3pg',
    imageUrl: '/exercises/BenchPress.png',
    category: 'compound',
    equipment: ['barbell', 'bench'],
    muscleGroups: ['chest', 'triceps', 'shoulders'],
    difficulty: 'intermediate',
    healthRisks: ['shoulder_pain', 'heart_condition']
  },
  'bent-over-row': {
    id: 'bent-over-row',
    name: 'Bent Over Row',
    description: {
      en: 'Compound exercise targeting back and biceps',
      tr: 'Sırt ve biceps hedefleyen temel egzersiz',
      de: 'Grundübung für Rücken und Bizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=kBWAon7ItDw',
    imageUrl: '/exercises/BentOverRow.png',
    category: 'compound',
    equipment: ['barbell'],
    muscleGroups: ['upper_back', 'biceps', 'forearms'],
    difficulty: 'intermediate',
    healthRisks: ['back_pain', 'neck_pain']
  },
  'plank': {
    id: 'plank',
    name: 'Plank',
    description: {
      en: 'Core strengthening exercise',
      tr: 'Core güçlendirme egzersizi',
      de: 'Rumpfstabilisierungsübung'
    },
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c',
    imageUrl: '/exercises/Plank.png',
    category: 'core',
    equipment: ['bodyweight'],
    muscleGroups: ['core', 'abdominals'],
    difficulty: 'beginner',
    healthRisks: ['back_pain', 'shoulder_pain', 'pregnancy']
  },
  'romanian-deadlift': {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift',
    description: {
      en: 'Compound exercise targeting hamstrings and lower back',
      tr: 'Hamstring ve bel bölgesini hedefleyen temel egzersiz',
      de: 'Grundübung für Oberschenkelrückseite und unteren Rücken'
    },
    videoUrl: 'https://www.youtube.com/watch?v=hCDzSR6bW10',
    imageUrl: '/exercises/RomanianDeadlift.png',
    category: 'compound',
    equipment: ['barbell'],
    muscleGroups: ['hamstrings', 'glutes', 'back'],
    difficulty: 'intermediate',
    healthRisks: ['back_pain', 'knee_problem']
  },
  'shoulder-press': {
    id: 'shoulder-press',
    name: 'Dumbbell Shoulder Press',
    description: {
      en: 'Compound exercise targeting shoulders',
      tr: 'Omuzları hedefleyen temel egzersiz',
      de: 'Grundübung für die Schultern'
    },
    videoUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog',
    imageUrl: '/exercises/DumbellShoulder_Press.png',
    category: 'compound',
    equipment: ['dumbbell'],
    muscleGroups: ['shoulders', 'triceps'],
    difficulty: 'intermediate',
    healthRisks: ['shoulder_pain', 'neck_pain']
  },
  'lat-pulldown': {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    description: {
      en: 'Compound exercise targeting back and biceps, machine-assisted',
      tr: 'Makine destekli sırt ve biceps egzersizi',
      de: 'Grundübung für Rücken und Bizeps am Gerät'
    },
    videoUrl: 'https://www.youtube.com/watch?v=CAwf7n6Luuc',
    imageUrl: '/exercises/LatPulldown.png',
    category: 'compound',
    equipment: ['machine'],
    muscleGroups: ['upper_back', 'biceps'],
    difficulty: 'beginner',
    healthRisks: ['shoulder_pain', 'back_pain']
  },
  'pullup': {
    id: 'pullup',
    name: 'Pull-up',
    description: {
      en: 'Compound exercise targeting back and biceps',
      tr: 'Sırt ve biceps hedefleyen temel egzersiz',
      de: 'Grundübung für Rücken und Bizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
    imageUrl: '/exercises/Pullup.png',
    category: 'compound',
    equipment: ['pullup bar', 'bodyweight'],
    muscleGroups: ['upper_back', 'biceps', 'forearms'],
    difficulty: 'intermediate',
    healthRisks: ['shoulder_pain', 'back_pain']
  },
  'biceps-curl': {
    id: 'biceps-curl',
    name: 'Biceps Curl',
    description: {
      en: 'Isolation exercise targeting biceps',
      tr: 'Biceps hedefleyen izolasyon egzersizi',
      de: 'Isolationsübung für den Bizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=NFzTWp2qpiE',
    imageUrl: '/exercises/BicepsCurl.png',
    category: 'isolation',
    equipment: ['cable'],
    muscleGroups: ['biceps', 'forearms'],
    difficulty: 'beginner',
    healthRisks: []
  },
  'cable-triceps-pushdown': {
    id: 'cable-triceps-pushdown',
    name: 'Cable Triceps Pushdown',
    description: {
      en: 'Isolation exercise targeting triceps',
      tr: 'Triceps hedefleyen izolasyon egzersizi',
      de: 'Isolationsübung für den Trizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=2-LAMcpzODU',
    imageUrl: '/exercises/CableTricepsPushdown.png',
    category: 'isolation',
    equipment: ['cable'],
    muscleGroups: ['triceps'],
    difficulty: 'beginner',
    healthRisks: ['shoulder_pain']
  },
  'kettlebell-goblet-squat': {
    id: 'kettlebell-goblet-squat',
    name: 'Kettlebell Goblet Squat',
    description: {
      en: 'Functional exercise targeting lower body and core',
      tr: 'Alt vücut ve core hedefleyen fonksiyonel egzersiz',
      de: 'Funktionelle Übung für Unterkörper und Core'
    },
    videoUrl: 'https://www.youtube.com/watch?v=QrVgpDOLlgM',
    imageUrl: '/exercises/GobletSquat.png',
    category: 'functional',
    equipment: ['kettlebell'],
    muscleGroups: ['quadriceps', 'glutes', 'core'],
    difficulty: 'beginner',
    healthRisks: ['knee_problem', 'back_pain']
  },
  'incline-pushup': {
    id: 'incline-pushup',
    name: 'Incline Push-up',
    description: {
      en: 'Push-up variation with hands elevated to reduce difficulty',
      tr: 'Eller yükseltilmiş şekilde yapılan, daha kolay şınav varyasyonu',
      de: 'Liegestütz-Variante mit erhöhten Händen, geringerer Schwierigkeit'
    },
    videoUrl: 'https://www.youtube.com/watch?v=4DWFkAqVmu0',
    imageUrl: '/exercises/InclinePushup.png',
    category: 'bodyweight',
    equipment: ['bodyweight', 'bench'],
    muscleGroups: ['chest', 'triceps', 'shoulders'],
    difficulty: 'beginner',
    healthRisks: ['shoulder_pain', 'wrist_pain']
  },
  'pushup': {
    id: 'pushup',
    name: 'Push-up',
    description: {
      en: 'Bodyweight exercise targeting chest and triceps',
      tr: 'Göğüs ve triceps hedefleyen vücut ağırlığı egzersizi',
      de: 'Körpergewichtsübung für Brust und Trizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
    imageUrl: '/exercises/Pushup.png',
    category: 'bodyweight',
    equipment: ['bodyweight'],
    muscleGroups: ['chest', 'triceps', 'shoulders'],
    difficulty: 'beginner',
    healthRisks: ['shoulder_pain', 'wrist_pain']
  },
  'dumbbell-row': {
    id: 'dumbbell-row',
    name: 'Dumbbell Row',
    description: {
      en: 'Compound exercise targeting back and biceps',
      tr: 'Sırt ve biceps hedefleyen temel egzersiz',
      de: 'Grundübung für Rücken und Bizeps'
    },
    videoUrl: 'https://www.youtube.com/watch?v=roCP6wCXPqo',
    imageUrl: '/exercises/DumbbellRow.png',
    category: 'compound',
    equipment: ['dumbbell'],
    muscleGroups: ['upper_back', 'biceps'],
    difficulty: 'beginner',
    healthRisks: ['back_pain', 'shoulder_pain']
  },
  'leg-raise': {
    id: 'leg-raise',
    name: 'Hanging Leg Raise',
    description: {
      en: 'Core exercise targeting lower abs',
      tr: 'Alt karın bölgesini hedefleyen core egzersizi',
      de: 'Core-Übung für die untere Bauchmuskulatur'
    },
    videoUrl: 'https://www.youtube.com/watch?v=Pr1ieGZ5atk',
    imageUrl: '/exercises/HangingLegRaise.png',
    category: 'core',
    equipment: ['bodyweight'],
    muscleGroups: ['abdominals', 'core'],
    difficulty: 'intermediate',
    healthRisks: ['back_pain', 'pregnancy']
  },
  'crunches': {
    id: 'crunches',
    name: 'Crunches',
    description: {
      en: 'Isolation exercise targeting the abdominals (abs)',
      tr: 'Karın kaslarını hedefleyen izolasyon egzersizi',
      de: 'Isolationsübung für die Bauchmuskeln'
    },
    videoUrl: 'https://www.youtube.com/watch?v=Xyd_fa5zoEU',
    imageUrl: '/exercises/Crunches.png',
    category: 'core',
    equipment: ['bodyweight'],
    muscleGroups: ['abdominals'],
    difficulty: 'beginner',
    healthRisks: ['neck_pain', 'back_pain']
  },
  'hyper-extension': {
    id: 'hyper-extension',
    name: 'Hyper Extension',
    description: {
      en: 'Isolation exercise for strengthening the lower back',
      tr: 'Alt sırtı güçlendiren izolasyon egzersizi',
      de: 'Isolationsübung für den unteren Rücken'
    },
    videoUrl: 'https://www.youtube.com/watch?v=ph3pddpKzzw',
    imageUrl: '/exercises/HyperExtension.png',
    category: 'isolation',
    equipment: ['bodyweight', 'bench'],
    muscleGroups: ['lower_back'],
    difficulty: 'beginner',
    healthRisks: ['back_pain']
  },
  'russian-twist': {
    id: 'russian-twist',
    name: 'Russian Twist',
    description: {
      en: 'Core exercise targeting obliques',
      tr: 'Yan karın bölgesini hedefleyen core egzersizi',
      de: 'Core-Übung für die schrägen Bauchmuskeln'
    },
    videoUrl: 'https://www.youtube.com/watch?v=wkD8rjkodUI',
    imageUrl: '/exercises/RussianTwist.png',
    category: 'core',
    equipment: ['bodyweight'],
    muscleGroups: ['obliques', 'core'],
    difficulty: 'beginner',
    healthRisks: ['back_pain', 'neck_pain', 'pregnancy']
  }
}; 