import { exerciseDatabase } from '@fitpersona/exercises';

export const sevenDayHomeWorkout = {
  name: {
    en: '7-Day Home Workout Program',
    tr: '7 Günlük Ev Antrenman Programı',
    de: '7-Tage Heimtraining-Programm'
  },
  description: {
    en: 'A comprehensive home-based workout program designed for daily training, using minimal equipment while targeting different muscle groups each day with appropriate intensity to allow for recovery.',
    tr: 'Günlük antrenman için tasarlanmış, minimum ekipman kullanarak her gün farklı kas gruplarını uygun yoğunlukta hedefleyen ve toparlanmaya izin veren kapsamlı bir ev tabanlı antrenman programı.',
    de: 'Ein umfassendes Heimtrainingsprogramm für tägliches Training, das mit minimaler Ausrüstung jeden Tag verschiedene Muskelgruppen mit angemessener Intensität anspricht und Erholung ermöglicht.'
  },
  days: [
    {
      name: { en: 'Day 1 - Chest & Triceps', tr: 'Gün 1 - Göğüs & Triceps', de: 'Tag 1 - Brust & Trizeps' },
      exercises: [
        { name: exerciseDatabase['pushup'].name, sets: 4, reps: '12-15', description: exerciseDatabase['pushup'].description, videoUrl: exerciseDatabase['pushup'].videoUrl },
        { name: exerciseDatabase['incline-pushup'].name, sets: 3, reps: '12-15', description: exerciseDatabase['incline-pushup'].description, videoUrl: exerciseDatabase['incline-pushup'].videoUrl },
        { name: exerciseDatabase['dips-chair'].name, sets: 3, reps: '10-12', description: exerciseDatabase['dips-chair'].description, videoUrl: exerciseDatabase['dips-chair'].videoUrl },
        { name: exerciseDatabase['overhead-triceps-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['overhead-triceps-extension'].description, videoUrl: exerciseDatabase['overhead-triceps-extension'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of jumping jacks and high knees',
        tr: '10 dakika jumping jack ve yüksek diz',
        de: '10 Minuten Hampelmänner und Knieheben'
      }
    },
    {
      name: { en: 'Day 2 - Back & Biceps', tr: 'Gün 2 - Sırt & Biceps', de: 'Tag 2 - Rücken & Bizeps' },
      exercises: [
        { name: exerciseDatabase['dumbbell-row'].name, sets: 4, reps: '10-12', description: exerciseDatabase['dumbbell-row'].description, videoUrl: exerciseDatabase['dumbbell-row'].videoUrl },
        { name: exerciseDatabase['hyper-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['hyper-extension'].description, videoUrl: exerciseDatabase['hyper-extension'].videoUrl },
        { name: exerciseDatabase['biceps-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['biceps-curl'].description, videoUrl: exerciseDatabase['biceps-curl'].videoUrl },
        { name: exerciseDatabase['hammer-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['hammer-curl'].description, videoUrl: exerciseDatabase['hammer-curl'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of shadow boxing',
        tr: '10 dakika gölge boksu',
        de: '10 Minuten Schattenboxen'
      }
    },
    {
      name: { en: 'Day 3 - Shoulders', tr: 'Gün 3 - Omuzlar', de: 'Tag 3 - Schultern' },
      exercises: [
        { name: exerciseDatabase['lateral-raise'].name, sets: 4, reps: '12-15', description: exerciseDatabase['lateral-raise'].description, videoUrl: exerciseDatabase['lateral-raise'].videoUrl },
        { name: exerciseDatabase['pushup'].name, sets: 3, reps: '10-12', description: exerciseDatabase['pushup'].description, videoUrl: exerciseDatabase['pushup'].videoUrl },
        { name: exerciseDatabase['dips-chair'].name, sets: 3, reps: '8-12', description: exerciseDatabase['dips-chair'].description, videoUrl: exerciseDatabase['dips-chair'].videoUrl },
        { name: exerciseDatabase['plank'].name, sets: 3, reps: '30-45 seconds', description: exerciseDatabase['plank'].description, videoUrl: exerciseDatabase['plank'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of burpees and mountain climbers',
        tr: '10 dakika burpee ve mountain climber',
        de: '10 Minuten Burpees und Bergsteiger'
      }
    },
    {
      name: { en: 'Day 4 - Quads & Calves', tr: 'Gün 4 - Quadriceps & Baldırlar', de: 'Tag 4 - Oberschenkel & Waden' },
      exercises: [
        { name: exerciseDatabase['bodyweight-squat'].name, sets: 4, reps: '15-20', description: exerciseDatabase['bodyweight-squat'].description, videoUrl: exerciseDatabase['bodyweight-squat'].videoUrl },
        { name: exerciseDatabase['lunge'].name, sets: 3, reps: '12 per leg', description: exerciseDatabase['lunge'].description, videoUrl: exerciseDatabase['lunge'].videoUrl },
        { name: exerciseDatabase['wall-sit'].name, sets: 3, reps: '30-45 seconds', description: exerciseDatabase['wall-sit'].description, videoUrl: exerciseDatabase['wall-sit'].videoUrl },
        { name: exerciseDatabase['calf-raise'].name, sets: 4, reps: '20-25', description: exerciseDatabase['calf-raise'].description, videoUrl: exerciseDatabase['calf-raise'].videoUrl }
      ],
      cardio: {
        en: '15 minutes of brisk walking or jogging in place',
        tr: '15 dakika tempolu yürüyüş veya yerinde koşu',
        de: '15 Minuten zügiges Gehen oder Laufen auf der Stelle'
      }
    },
    {
      name: { en: 'Day 5 - Hamstrings & Glutes', tr: 'Gün 5 - Hamstring & Kalça', de: 'Tag 5 - Beinbizeps & Gesäß' },
      exercises: [
        { name: exerciseDatabase['glute-bridge'].name, sets: 4, reps: '15-20', description: exerciseDatabase['glute-bridge'].description, videoUrl: exerciseDatabase['glute-bridge'].videoUrl },
        { name: exerciseDatabase['lunge'].name, sets: 3, reps: '12 per leg', description: exerciseDatabase['lunge'].description, videoUrl: exerciseDatabase['lunge'].videoUrl },
        { name: exerciseDatabase['hyper-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['hyper-extension'].description, videoUrl: exerciseDatabase['hyper-extension'].videoUrl },
        { name: exerciseDatabase['calf-raise'].name, sets: 3, reps: '20-25', description: exerciseDatabase['calf-raise'].description, videoUrl: exerciseDatabase['calf-raise'].videoUrl }
      ],
      cardio: {
        en: '15 minutes of brisk walking or jogging in place',
        tr: '15 dakika tempolu yürüyüş veya yerinde koşu',
        de: '15 Minuten zügiges Gehen oder Laufen auf der Stelle'
      }
    },
    {
      name: { en: 'Day 6 - Core', tr: 'Gün 6 - Core', de: 'Tag 6 - Rumpf' },
      exercises: [
        { name: exerciseDatabase['crunch'].name, sets: 3, reps: '15-20', description: exerciseDatabase['crunch'].description, videoUrl: exerciseDatabase['crunch'].videoUrl },
        { name: exerciseDatabase['russian-twist'].name, sets: 3, reps: '15 each side', description: exerciseDatabase['russian-twist'].description, videoUrl: exerciseDatabase['russian-twist'].videoUrl },
        { name: exerciseDatabase['leg-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['leg-raise'].description, videoUrl: exerciseDatabase['leg-raise'].videoUrl },
        { name: exerciseDatabase['plank'].name, sets: 3, reps: '45-60 seconds', description: exerciseDatabase['plank'].description, videoUrl: exerciseDatabase['plank'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of high-intensity interval training (30 seconds on, 30 seconds off)',
        tr: '10 dakika yüksek yoğunluklu interval antrenman (30 saniye çalışma, 30 saniye dinlenme)',
        de: '10 Minuten hochintensives Intervalltraining (30 Sekunden an, 30 Sekunden aus)'
      }
    },
    {
      name: { en: 'Day 7 - Mobility & Recovery', tr: 'Gün 7 - Hareketlilik & Toparlanma', de: 'Tag 7 - Beweglichkeit & Erholung' },
      exercises: [
        { name: exerciseDatabase['cobra-stretch'].name, sets: 3, reps: '30 seconds hold', description: exerciseDatabase['cobra-stretch'].description, videoUrl: exerciseDatabase['cobra-stretch'].videoUrl },
        { name: exerciseDatabase['glute-bridge'].name, sets: 2, reps: '10 (slow and controlled)', description: exerciseDatabase['glute-bridge'].description, videoUrl: exerciseDatabase['glute-bridge'].videoUrl },
        { name: exerciseDatabase['plank'].name, sets: 2, reps: '30 seconds', description: exerciseDatabase['plank'].description, videoUrl: exerciseDatabase['plank'].videoUrl },
        { name: exerciseDatabase['wall-sit'].name, sets: 2, reps: '20 seconds', description: exerciseDatabase['wall-sit'].description, videoUrl: exerciseDatabase['wall-sit'].videoUrl }
      ],
      cardio: {
        en: '20 minutes of yoga flow or mobility exercises',
        tr: '20 dakika yoga akışı veya hareketlilik egzersizleri',
        de: '20 Minuten Yoga-Flow oder Mobilitätsübungen'
      }
    }
  ]
};
