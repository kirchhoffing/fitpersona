import { exerciseDatabase } from '@fitpersona/exercises';

export const sixDayHomeWorkout = {
  name: {
    en: '6-Day Home Workout Program',
    tr: '6 Günlük Ev Antrenman Programı',
    de: '6-Tage Heimtraining-Programm'
  },
  description: {
    en: 'A comprehensive home-based workout program designed for six training days per week, using minimal equipment while providing balanced muscle development with a push/pull/legs split repeated twice weekly.',
    tr: 'Haftada altı antrenman günü için tasarlanmış, minimum ekipman kullanarak haftada iki kez tekrarlanan itme/çekme/bacak bölünmesiyle dengeli kas gelişimi sağlayan kapsamlı bir ev tabanlı antrenman programı.',
    de: 'Ein umfassendes Heimtrainingsprogramm für sechs Trainingstage pro Woche, das mit minimaler Ausrüstung eine ausgewogene Muskelentwicklung mit einem zweimal wöchentlich wiederholten Drücken/Ziehen/Beine-Split bietet.'
  },
  days: [
    {
      name: { en: 'Day 1 - Push A', tr: 'Gün 1 - İtme A', de: 'Tag 1 - Drücken A' },
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
      name: { en: 'Day 2 - Pull A', tr: 'Gün 2 - Çekme A', de: 'Tag 2 - Ziehen A' },
      exercises: [
        { name: exerciseDatabase['dumbbell-row'].name, sets: 4, reps: '10-12', description: exerciseDatabase['dumbbell-row'].description, videoUrl: exerciseDatabase['dumbbell-row'].videoUrl },
        { name: exerciseDatabase['hyper-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['hyper-extension'].description, videoUrl: exerciseDatabase['hyper-extension'].videoUrl },
        { name: exerciseDatabase['biceps-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['biceps-curl'].description, videoUrl: exerciseDatabase['biceps-curl'].videoUrl },
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
      name: { en: 'Day 3 - Legs A', tr: 'Gün 3 - Bacaklar A', de: 'Tag 3 - Beine A' },
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
      name: { en: 'Day 4 - Push B', tr: 'Gün 4 - İtme B', de: 'Tag 4 - Drücken B' },
      exercises: [
        { name: exerciseDatabase['incline-pushup'].name, sets: 4, reps: '12-15', description: exerciseDatabase['incline-pushup'].description, videoUrl: exerciseDatabase['incline-pushup'].videoUrl },
        { name: exerciseDatabase['pushup'].name, sets: 3, reps: '10-15', description: exerciseDatabase['pushup'].description, videoUrl: exerciseDatabase['pushup'].videoUrl },
        { name: exerciseDatabase['lateral-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['lateral-raise'].description, videoUrl: exerciseDatabase['lateral-raise'].videoUrl },
        { name: exerciseDatabase['dips-chair'].name, sets: 3, reps: '8-12', description: exerciseDatabase['dips-chair'].description, videoUrl: exerciseDatabase['dips-chair'].videoUrl },
        { name: exerciseDatabase['crunch'].name, sets: 3, reps: '15-20', description: exerciseDatabase['crunch'].description, videoUrl: exerciseDatabase['crunch'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of burpees and mountain climbers',
        tr: '10 dakika burpee ve mountain climber',
        de: '10 Minuten Burpees und Bergsteiger'
      }
    },
    {
      name: { en: 'Day 5 - Pull B', tr: 'Gün 5 - Çekme B', de: 'Tag 5 - Ziehen B' },
      exercises: [
        { name: exerciseDatabase['dumbbell-row'].name, sets: 4, reps: '10-12', description: exerciseDatabase['dumbbell-row'].description, videoUrl: exerciseDatabase['dumbbell-row'].videoUrl },
        { name: exerciseDatabase['biceps-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['biceps-curl'].description, videoUrl: exerciseDatabase['biceps-curl'].videoUrl },
        { name: exerciseDatabase['hyper-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['hyper-extension'].description, videoUrl: exerciseDatabase['hyper-extension'].videoUrl },
        { name: exerciseDatabase['russian-twist'].name, sets: 3, reps: '15 each side', description: exerciseDatabase['russian-twist'].description, videoUrl: exerciseDatabase['russian-twist'].videoUrl },
        { name: exerciseDatabase['leg-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['leg-raise'].description, videoUrl: exerciseDatabase['leg-raise'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of high-intensity interval training (30 seconds on, 30 seconds off)',
        tr: '10 dakika yüksek yoğunluklu interval antrenman (30 saniye çalışma, 30 saniye dinlenme)',
        de: '10 Minuten hochintensives Intervalltraining (30 Sekunden an, 30 Sekunden aus)'
      }
    },
    {
      name: { en: 'Day 6 - Legs B', tr: 'Gün 6 - Bacaklar B', de: 'Tag 6 - Beine B' },
      exercises: [
        { name: exerciseDatabase['lunge'].name, sets: 4, reps: '12 per leg', description: exerciseDatabase['lunge'].description, videoUrl: exerciseDatabase['lunge'].videoUrl },
        { name: exerciseDatabase['bodyweight-squat'].name, sets: 3, reps: '15-20', description: exerciseDatabase['bodyweight-squat'].description, videoUrl: exerciseDatabase['bodyweight-squat'].videoUrl },
        { name: exerciseDatabase['calf-raise'].name, sets: 3, reps: '20-25', description: exerciseDatabase['calf-raise'].description, videoUrl: exerciseDatabase['calf-raise'].videoUrl },
        { name: exerciseDatabase['glute-bridge'].name, sets: 3, reps: '15-20', description: exerciseDatabase['glute-bridge'].description, videoUrl: exerciseDatabase['glute-bridge'].videoUrl },
        { name: exerciseDatabase['plank'].name, sets: 3, reps: '45-60 seconds', description: exerciseDatabase['plank'].description, videoUrl: exerciseDatabase['plank'].videoUrl }
      ],
      cardio: {
        en: '15 minutes of brisk walking or jogging in place',
        tr: '15 dakika tempolu yürüyüş veya yerinde koşu',
        de: '15 Minuten zügiges Gehen oder Laufen auf der Stelle'
      }
    }
  ]
};
