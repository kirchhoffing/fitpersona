import { Exercise } from './types';

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
    healthRisks: ['back_pain', 'knee_problem'],
    alternatives: ['bodyweight-squat', 'leg-press']
  },
  'bodyweight-squat': {
    id: 'bodyweight-squat',
    name: 'Bodyweight Squat',
    description: {
      en: 'A basic squat performed using only bodyweight, targeting the lower body.',
      tr: 'Sadece vücut ağırlığı ile yapılan temel squat, alt vücudu hedefler.',
      de: 'Eine grundlegende Kniebeuge nur mit dem eigenen Körpergewicht, zielt auf den Unterkörper.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=aclHkVaku9U',
    imageUrl: '/exercises/BodyweightSquat.png',
    category: 'bodyweight',
    equipment: ['bodyweight'],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'core'],
    difficulty: 'beginner',
    healthRisks: []
  },
  'glute-bridge': {
    id: 'glute-bridge',
    name: 'Glute Bridge',
    description: {
      en: 'Bodyweight exercise focusing on glutes and hamstrings.',
      tr: 'Kalça ve arka bacak kaslarını hedefleyen vücut ağırlığı egzersizi.',
      de: 'Körpergewichtsübung für Gesäß und hintere Oberschenkel.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=m2Zx-57cSok',
    imageUrl: '/exercises/GluteBridge.png',
    category: 'bodyweight',
    equipment: ['bodyweight'],
    muscleGroups: ['glutes', 'hamstrings', 'core'],
    difficulty: 'beginner',
    healthRisks: []
  },
  'lunge': {
    id: 'lunge',
    name: 'Lunge',
    description: {
      en: 'A bodyweight exercise targeting quads, glutes, and hamstrings, performed by stepping forward and lowering the hips.',
      tr: 'Öne adım atıp kalçayı indirerek yapılan ve uyluk, kalça ve arka bacak kaslarını hedefleyen vücut ağırlığı egzersizi.',
      de: 'Eine Übung mit dem eigenen Körpergewicht, bei der man einen Schritt nach vorne macht und die Hüfte absenkt. Zielmuskeln: Oberschenkel, Gesäß, hintere Oberschenkel.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U',
    imageUrl: '/exercises/Lunge.png',
    category: 'bodyweight',
    equipment: ['bodyweight'],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
    difficulty: 'beginner',
    healthRisks: []
  },
  'wall-sit': {
    id: 'wall-sit',
    name: 'Wall Sit',
    description: {
      en: 'Isometric bodyweight exercise performed by sitting against a wall to strengthen the thighs and glutes.',
      tr: 'Duvara yaslanarak yapılan ve uyluk ile kalça kaslarını güçlendiren izometrik vücut ağırlığı egzersizi.',
      de: 'Isometrische Übung an der Wand, stärkt Oberschenkel und Gesäß.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=-cdph8hv0O0',
    imageUrl: '/exercises/WallSit.png',
    category: 'bodyweight',
    equipment: ['bodyweight'],
    muscleGroups: ['quadriceps', 'glutes'],
    difficulty: 'beginner',
    healthRisks: []
  },
  'crunch': {
    id: 'crunch',
    name: 'Crunch',
    description: {
      en: 'A classic abdominal exercise performed by curling the shoulders towards the pelvis while lying on your back.',
      tr: 'Sırt üstü yatarken omuzları pelvise doğru kaldırarak yapılan klasik karın egzersizi.',
      de: 'Klassische Bauchübung, bei der die Schultern zum Becken gezogen werden.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=Xyd_fa5zoEU',
    imageUrl: '/exercises/Crunch.png',
    category: 'core',
    equipment: ['bodyweight'],
    muscleGroups: ['abdominals'],
    difficulty: 'intermediate',
    healthRisks: ['neck_pain', 'back_pain'],
    alternatives: ['cobra-stretch', 'plank']
  },
  'cobra-stretch': {
    id: 'cobra-stretch',
    name: 'Cobra Stretch',
    description: {
      en: 'A yoga stretch that opens the chest and strengthens the spine, performed by lying face down and pressing the chest upward.',
      tr: 'Yüz üstü yatıp göğsü yukarı kaldırarak yapılan, omurgayı güçlendiren ve göğsü açan yoga esnetmesi.',
      de: 'Eine Yoga-Dehnung zur Öffnung der Brust und Stärkung der Wirbelsäule, indem man sich aus der Bauchlage mit den Händen aufrichtet.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=JDcdhTuycOI',
    imageUrl: '/exercises/CobraStretch.png',
    category: 'core',
    equipment: ['bodyweight'],
    muscleGroups: ['chest', 'abdominals'],
    difficulty: 'beginner',
    healthRisks: []
  },
  'incline-bench-press': {
    id: 'incline-bench-press',
    name: 'Incline Bench Press',
    description: {
      en: 'Variation of bench press with barbell set at an incline, targeting the upper chest.',
      tr: 'Barbell’in eğimli olarak kullanıldığı, üst göğüs kaslarını hedefleyen bench press varyasyonu.',
      de: 'Variante der Bankdrückübung mit geneigter Stange, zielt auf den oberen Brustbereich ab.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=8iPEnn-ltC8',
    imageUrl: '/exercises/InclineBenchPress.png',
    category: 'compound',
    equipment: ['barbell', 'bench'],
    muscleGroups: ['chest', 'shoulders', 'triceps'],
    difficulty: 'intermediate',
    healthRisks: ['shoulder_pain'],
    alternatives: ['pushup', 'cobra-stretch']
  },
  'dumbbell-shoulder-press': {
    id: 'dumbbell-shoulder-press',
    name: 'Dumbbell Shoulder Press',
    description: {
      en: 'Compound exercise targeting shoulders using dumbbells.',
      tr: 'Dumbbell kullanılarak yapılan, omuz kaslarını hedefleyen bileşik egzersiz.',
      de: 'Grundübung für die Schultern mit Kurzhanteln.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog',
    imageUrl: '/exercises/DumbbellShoulderPress.png',
    category: 'compound',
    equipment: ['dumbbell'],
    muscleGroups: ['shoulders', 'triceps'],
    difficulty: 'intermediate',
    healthRisks: ['shoulder_pain', 'neck_pain'],
    alternatives: ['lateral-raise', 'overhead-triceps-extension']
  },
  'lateral-raise': {
    id: 'lateral-raise',
    name: 'Lateral Raise',
    description: {
      en: 'Isolation exercise targeting the side deltoids.',
      tr: 'Yan deltoid kaslarını hedefleyen izole egzersiz.',
      de: 'Isolationsübung für die seitliche Schulter.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=3VcKaXpzqRo',
    imageUrl: '/exercises/LateralRaise.png',
    category: 'isolation',
    equipment: ['dumbbell'],
    muscleGroups: ['shoulders'],
    difficulty: 'beginner',
    healthRisks: []
  },
  'overhead-triceps-extension': {
    id: 'overhead-triceps-extension',
    name: 'Overhead Triceps Extension',
    description: {
      en: 'Isolation exercise targeting the triceps by extending arms overhead.',
      tr: 'Kollar yukarıda uzatılarak yapılan, triceps kaslarını hedefleyen izolasyon egzersizi.',
      de: 'Isolationsübung für den Trizeps, Arme über den Kopf gestreckt.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=nRiJVZDpdL0',
    imageUrl: '/exercises/OverheadTricepsExtension.png',
    category: 'isolation',
    equipment: ['dumbbell'],
    muscleGroups: ['triceps'],
    difficulty: 'beginner',
    healthRisks: []
  },
  'seated-cable-row': {
    id: 'seated-cable-row',
    name: 'Seated Cable Row',
    description: {
      en: 'Compound exercise targeting back and biceps using a cable machine.',
      tr: 'Kablo makinesi kullanılarak yapılan, sırt ve biceps kaslarını hedefleyen bileşik egzersiz.',
      de: 'Grundübung für Rücken und Bizeps an der Kabelzugmaschine.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=HJSVR_67OlM',
    imageUrl: '/exercises/SeatedCableRow.png',
    category: 'compound',
    equipment: ['machine'],
    muscleGroups: ['upper_back', 'biceps'],
    difficulty: 'intermediate',
    healthRisks: ['back_pain'],
    alternatives: ['cable-biceps-curl']
  },
  'barbell-curl': {
    id: 'barbell-curl',
    name: 'Barbell Curl',
    description: {
      en: 'Isolation exercise targeting the biceps using a barbell.',
      tr: 'Barbell kullanılarak yapılan, biceps kaslarını hedefleyen izolasyon egzersizi.',
      de: 'Isolationsübung für den Bizeps mit der Langhantel.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=kwG2ipFRgfo',
    imageUrl: '/exercises/BarbellCurl.png',
    category: 'isolation',
    equipment: ['barbell'],
    muscleGroups: ['biceps', 'forearms'],
    difficulty: 'beginner',
    healthRisks: []
  },
  'hammer-curl': {
    id: 'hammer-curl',
    name: 'Hammer Curl',
    description: {
      en: 'Isolation exercise targeting biceps and forearms with a neutral grip.',
      tr: 'Nötr kavrama ile yapılan, biceps ve ön kol kaslarını hedefleyen izolasyon egzersiz.',
      de: 'Isolationsübung für Bizeps und Unterarme mit Neutralgriff.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=zC3nLlEvin4',
    imageUrl: '/exercises/HammerCurl.png',
    category: 'isolation',
    equipment: ['dumbbell'],
    muscleGroups: ['biceps', 'forearms'],
    difficulty: 'beginner',
    healthRisks: []
  },
  'leg-press': {
    id: 'leg-press',
    name: 'Leg Press',
    description: {
      en: 'Machine exercise targeting the lower body.',
      tr: 'Makine kullanılarak yapılan alt vücut kaslarını hedefleyen egzersiz.',
      de: 'Geräteübung für den Unterkörper.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=IZxyjW7MPJQ',
    imageUrl: '/exercises/LegPress.png',
    category: 'compound',
    equipment: ['machine'],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
    difficulty: 'intermediate',
    healthRisks: ['back_pain', 'knee_problem'],
    alternatives: ['bodyweight-squat', 'lunge', 'wall-sit']
  },
  'calf-raise': {
    id: 'calf-raise',
    name: 'Calf Raise',
    description: {
      en: 'Isolation exercise targeting the calves.',
      tr: 'Baldır kaslarını hedefleyen izolasyon egzersizi.',
      de: 'Isolationsübung für die Waden.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=-M4-G8p8fmc',
    imageUrl: '/exercises/CalfRaise.png',
    category: 'isolation',
    equipment: ['bodyweight', 'machine'],
    muscleGroups: ['calves'],
    difficulty: 'beginner',
    healthRisks: []
  },
  'cable-biceps-curl': {
    id: 'cable-biceps-curl',
    name: 'Cable Biceps Curl',
    description: {
      en: 'Isolation exercise targeting the biceps using a cable machine.',
      tr: 'Kablo makinesi kullanılarak yapılan, biceps kaslarını hedefleyen izolasyon egzersizi.',
      de: 'Isolationsübung für den Bizeps an der Kabelzugmaschine.'
    },
    videoUrl: 'https://www.youtube.com/watch?v=av7-8igSXTs',
    imageUrl: '/exercises/CableBicepsCurl.png',
    category: 'isolation',
    equipment: ['cable'],
    muscleGroups: ['biceps'],
    difficulty: 'beginner',
    healthRisks: []
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
    healthRisks: ['shoulder_pain'],
    alternatives: ['pushup', 'cobra-stretch']
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
    healthRisks: ['back_pain', 'neck_pain'],
    alternatives: ['cable-biceps-curl', 'hammer-curl']
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
    healthRisks: []
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
    muscleGroups: ['hamstrings', 'lower_back', 'glutes'],
    difficulty: 'intermediate',
    healthRisks: ['back_pain'],
    alternatives: ['glute-bridge', 'lunge']
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
    healthRisks: []
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
    difficulty: 'beginner',
    healthRisks: []
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
    healthRisks: []
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
    healthRisks: []
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
    healthRisks: []
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
    healthRisks: []
  },
  'dips-chair': {
    id: 'dips-chair',
    name: 'Chair Dips',
    description: {
      en: 'Bodyweight exercise targeting triceps using a chair',
      tr: 'Bir sandalyeyi kullanarak triceps hedefleyen vücut ağırlığı egzersizi',
      de: 'Körpergewichtsübung für Trizeps mit Stuhl'
    },
    videoUrl: 'https://www.youtube.com/watch?v=0326dy_-CzM',
    imageUrl: '/exercises/ChairDips.png',
    category: 'compound',
    equipment: ['bodyweight', 'bench'],
    muscleGroups: ['triceps', 'shoulders'],
    difficulty: 'intermediate',
    healthRisks: ['shoulder_pain', 'wrist_pain', 'elbow_pain']
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
    difficulty: 'intermediate',
    healthRisks: ['back_pain']
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
    difficulty: 'intermediate',
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
    healthRisks: []
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
    difficulty: 'intermediate',
    healthRisks: ['back_pain', 'neck_pain', 'pregnancy']
  }
}; 