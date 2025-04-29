import { exerciseDatabase } from '@fitpersona/exercises';

export const fourDayHomeWorkout = {
  name: {
    en: '4-Day Home Workout Program',
    tr: '4 Günlük Ev Antrenman Programı',
    de: '4-Tage Heimtraining-Programm'
  },
  description: {
    en: 'A comprehensive home-based workout program designed for four training days per week, using minimal equipment while targeting all major muscle groups.',
    tr: 'Haftada dört antrenman günü için tasarlanmış, minimum ekipman kullanarak tüm ana kas gruplarını hedefleyen kapsamlı bir ev tabanlı antrenman programı.',
    de: 'Ein umfassendes Heimtrainingsprogramm für vier Trainingstage pro Woche, das mit minimaler Ausrüstung alle wichtigen Muskelgruppen anspricht.'
  },
  days: [
    {
      name: { en: 'Day 1 - Upper Body Push', tr: 'Gün 1 - Üst Vücut İtme', de: 'Tag 1 - Oberkörper Drücken' },
      exercises: [
        { name: exerciseDatabase['pushup'].name, sets: 4, reps: '10-15', description: exerciseDatabase['pushup'].description, videoUrl: exerciseDatabase['pushup'].videoUrl },
        { name: exerciseDatabase['incline-pushup'].name, sets: 3, reps: '12-15', description: exerciseDatabase['incline-pushup'].description, videoUrl: exerciseDatabase['incline-pushup'].videoUrl },
        { name: exerciseDatabase['dips-chair'].name, sets: 3, reps: '8-12', description: exerciseDatabase['dips-chair'].description, videoUrl: exerciseDatabase['dips-chair'].videoUrl },
        { name: exerciseDatabase['overhead-triceps-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['overhead-triceps-extension'].description, videoUrl: exerciseDatabase['overhead-triceps-extension'].videoUrl },
        { name: exerciseDatabase['plank'].name, sets: 3, reps: '30-45 seconds', description: exerciseDatabase['plank'].description, videoUrl: exerciseDatabase['plank'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of jumping jacks, high knees, and mountain climbers circuit',
        tr: '10 dakika jumping jack, yüksek diz ve mountain climber devresi',
        de: '10 Minuten Hampelmänner, Knieheben und Bergsteiger-Zirkel'
      }
    },
    {
      name: { en: 'Day 2 - Lower Body', tr: 'Gün 2 - Alt Vücut', de: 'Tag 2 - Unterkörper' },
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
      name: { en: 'Day 3 - Upper Body Pull', tr: 'Gün 3 - Üst Vücut Çekme', de: 'Tag 3 - Oberkörper Ziehen' },
      exercises: [
        { name: exerciseDatabase['dumbbell-row'].name, sets: 4, reps: '10-12', description: exerciseDatabase['dumbbell-row'].description, videoUrl: exerciseDatabase['dumbbell-row'].videoUrl },
        { name: exerciseDatabase['biceps-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['biceps-curl'].description, videoUrl: exerciseDatabase['biceps-curl'].videoUrl },
        { name: exerciseDatabase['hammer-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['hammer-curl'].description, videoUrl: exerciseDatabase['hammer-curl'].videoUrl },
        { name: exerciseDatabase['lateral-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['lateral-raise'].description, videoUrl: exerciseDatabase['lateral-raise'].videoUrl },
        { name: exerciseDatabase['hyper-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['hyper-extension'].description, videoUrl: exerciseDatabase['hyper-extension'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of shadow boxing and dynamic movements',
        tr: '10 dakika gölge boksu ve dinamik hareketler',
        de: '10 Minuten Schattenboxen und dynamische Bewegungen'
      }
    },
    {
      name: { en: 'Day 4 - Core & Mobility', tr: 'Gün 4 - Core & Hareketlilik', de: 'Tag 4 - Rumpf & Beweglichkeit' },
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
