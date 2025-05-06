import { exerciseDatabase } from '@fitpersona/exercises';

export const fiveDayHomeWorkout = {
  name: {
    en: '5-Day Home Workout Program',
    tr: '5 Günlük Ev Antrenman Programı',
    de: '5-Tage Heimtraining-Programm'
  },
  description: {
    en: 'A comprehensive home-based workout program designed for five training days per week, using minimal equipment while providing balanced muscle development and adequate recovery.',
    tr: 'Haftada beş antrenman günü için tasarlanmış, minimum ekipman kullanarak dengeli kas gelişimi ve yeterli toparlanma sağlayan kapsamlı bir ev tabanlı antrenman programı.',
    de: 'Ein umfassendes Heimtrainingsprogramm für fünf Trainingstage pro Woche, das mit minimaler Ausrüstung eine ausgewogene Muskelentwicklung und angemessene Erholung bietet.'
  },
  days: [
    {
      name: { en: 'Day 1 - Push (Chest/Shoulders/Triceps)', tr: 'Gün 1 - İtme (Göğüs/Omuzlar/Triceps)', de: 'Tag 1 - Drücken (Brust/Schultern/Trizeps)' },
      exercises: [
        { name: exerciseDatabase['pushup'].name, sets: 4, reps: '12-15', description: exerciseDatabase['pushup'].description, videoUrl: exerciseDatabase['pushup'].videoUrl },
        { name: exerciseDatabase['incline-pushup'].name, sets: 3, reps: '12-15', description: exerciseDatabase['incline-pushup'].description, videoUrl: exerciseDatabase['incline-pushup'].videoUrl },
        { name: exerciseDatabase['dips-chair'].name, sets: 3, reps: '10-12', description: exerciseDatabase['dips-chair'].description, videoUrl: exerciseDatabase['dips-chair'].videoUrl },
        { name: exerciseDatabase['lateral-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['lateral-raise'].description, videoUrl: exerciseDatabase['lateral-raise'].videoUrl },
        { name: exerciseDatabase['overhead-triceps-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['overhead-triceps-extension'].description, videoUrl: exerciseDatabase['overhead-triceps-extension'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of jumping jacks and high knees',
        tr: '10 dakika jumping jack ve yüksek diz',
        de: '10 Minuten Hampelmänner und Knieheben'
      }
    },
    {
      name: { en: 'Day 2 - Pull (Back/Biceps)', tr: 'Gün 2 - Çekme (Sırt/Biceps)', de: 'Tag 2 - Ziehen (Rücken/Bizeps)' },
      exercises: [
        { name: exerciseDatabase['dumbbell-row'].name, sets: 4, reps: '10-12', description: exerciseDatabase['dumbbell-row'].description, videoUrl: exerciseDatabase['dumbbell-row'].videoUrl },
        { name: exerciseDatabase['hyper-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['hyper-extension'].description, videoUrl: exerciseDatabase['hyper-extension'].videoUrl },
        { name: exerciseDatabase['barbell-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['barbell-curl'].description, videoUrl: exerciseDatabase['barbell-curl'].videoUrl },
        { name: exerciseDatabase['hammer-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['hammer-curl'].description, videoUrl: exerciseDatabase['hammer-curl'].videoUrl },
        { name: exerciseDatabase['plank'].name, sets: 3, reps: '30-45 seconds', description: exerciseDatabase['plank'].description, videoUrl: exerciseDatabase['plank'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of shadow boxing',
        tr: '10 dakika gölge boksu',
        de: '10 Minuten Schattenboxen'
      }
    },
    {
      name: { en: 'Day 3 - Legs', tr: 'Gün 3 - Bacaklar', de: 'Tag 3 - Beine' },
      exercises: [
        { name: exerciseDatabase['bodyweight-squat'].name, sets: 4, reps: '15-20', description: exerciseDatabase['bodyweight-squat'].description, videoUrl: exerciseDatabase['bodyweight-squat'].videoUrl },
        { name: exerciseDatabase['lunge'].name, sets: 3, reps: '12 per leg', description: exerciseDatabase['lunge'].description, videoUrl: exerciseDatabase['lunge'].videoUrl },
        { name: exerciseDatabase['glute-bridge'].name, sets: 3, reps: '15-20', description: exerciseDatabase['glute-bridge'].description, videoUrl: exerciseDatabase['glute-bridge'].videoUrl },
        { name: exerciseDatabase['wall-sit'].name, sets: 3, reps: '30-45 seconds', description: exerciseDatabase['wall-sit'].description, videoUrl: exerciseDatabase['wall-sit'].videoUrl },
        { name: exerciseDatabase['calf-raise'].name, sets: 3, reps: '20-25', description: exerciseDatabase['calf-raise'].description, videoUrl: exerciseDatabase['calf-raise'].videoUrl }
      ],
      cardio: {
        en: '15 minutes of brisk walking or jogging in place',
        tr: '15 dakika tempolu yürüyüş veya yerinde koşu',
        de: '15 Minuten zügiges Gehen oder Laufen auf der Stelle'
      }
    },
    {
      name: { en: 'Day 4 - Upper Body', tr: 'Gün 4 - Üst Vücut', de: 'Tag 4 - Oberkörper' },
      exercises: [
        { name: exerciseDatabase['pushup'].name, sets: 3, reps: '10-15', description: exerciseDatabase['pushup'].description, videoUrl: exerciseDatabase['pushup'].videoUrl },
        { name: exerciseDatabase['dumbbell-row'].name, sets: 3, reps: '10-12', description: exerciseDatabase['dumbbell-row'].description, videoUrl: exerciseDatabase['dumbbell-row'].videoUrl },
        { name: exerciseDatabase['lateral-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['lateral-raise'].description, videoUrl: exerciseDatabase['lateral-raise'].videoUrl },
        { name: exerciseDatabase['biceps-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['biceps-curl'].description, videoUrl: exerciseDatabase['biceps-curl'].videoUrl },
        { name: exerciseDatabase['dips-chair'].name, sets: 3, reps: '8-12', description: exerciseDatabase['dips-chair'].description, videoUrl: exerciseDatabase['dips-chair'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of burpees and mountain climbers',
        tr: '10 dakika burpee ve mountain climber',
        de: '10 Minuten Burpees und Bergsteiger'
      }
    },
    {
      name: { en: 'Day 5 - Core & Mobility', tr: 'Gün 5 - Core & Hareketlilik', de: 'Tag 5 - Rumpf & Beweglichkeit' },
      exercises: [
        { name: exerciseDatabase['crunch'].name, sets: 3, reps: '15-20', description: exerciseDatabase['crunch'].description, videoUrl: exerciseDatabase['crunch'].videoUrl },
        { name: exerciseDatabase['russian-twist'].name, sets: 3, reps: '15 each side', description: exerciseDatabase['russian-twist'].description, videoUrl: exerciseDatabase['russian-twist'].videoUrl },
        { name: exerciseDatabase['leg-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['leg-raise'].description, videoUrl: exerciseDatabase['leg-raise'].videoUrl },
        { name: exerciseDatabase['plank'].name, sets: 3, reps: '45-60 seconds', description: exerciseDatabase['plank'].description, videoUrl: exerciseDatabase['plank'].videoUrl },
        { name: exerciseDatabase['cobra-stretch'].name, sets: 2, reps: '30 seconds hold', description: exerciseDatabase['cobra-stretch'].description, videoUrl: exerciseDatabase['cobra-stretch'].videoUrl }
      ],
      cardio: {
        en: '20 minutes of yoga flow or mobility exercises',
        tr: '20 dakika yoga akışı veya hareketlilik egzersizleri',
        de: '20 Minuten Yoga-Flow oder Mobilitätsübungen'
      }
    }
  ]
};
