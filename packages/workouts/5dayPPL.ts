import { exerciseDatabase } from '@fitpersona/exercises';

export const fiveDayPPLWorkout = {
  name: {
    en: '5-Day Push/Pull/Legs Workout Program',
    tr: '5 Günlük Push/Pull/Legs Antrenman Programı',
    de: '5-Tage Push/Pull/Beine Trainingsprogramm'
  },
  description: {
    en: 'An advanced 5-day split focusing on push, pull, legs, and accessory work for maximum gains.',
    tr: 'Maksimum kazanım için push, pull, bacaklar ve aksesuar çalışmasını içeren ileri seviye 5 günlük split program.',
    de: 'Ein fortgeschrittenes 5-Tage-Split-Programm, das sich auf Push-, Pull-, Beine- und Zubehörarbeit für maximale Erträge konzentriert.'
  },
  days: [
    {
      name: { en: 'Day 1 - Push A', tr: 'Gün 1 – Push A', de: 'Tag 1 - Push A' },
      exercises: [
        { name: exerciseDatabase['incline-bench-press'].name, sets: 4, reps: '6-8', description: exerciseDatabase['incline-bench-press'].description, videoUrl: exerciseDatabase['incline-bench-press'].videoUrl },
        { name: exerciseDatabase['incline-bench-press'].name, sets: 3, reps: '8-10', description: exerciseDatabase['incline-bench-press'].description, videoUrl: exerciseDatabase['incline-bench-press'].videoUrl },
        { name: exerciseDatabase['overhead-triceps-extension'].name, sets: 3, reps: '10-12', description: exerciseDatabase['overhead-triceps-extension'].description, videoUrl: exerciseDatabase['overhead-triceps-extension'].videoUrl }
      ]
    },
    {
      name: { en: 'Day 2 - Pull A', tr: 'Gün 2 – Pull A', de: 'Tag 2 - Pull A' },
      exercises: [
        { name: exerciseDatabase['lat-pulldown'].name, sets: 4, reps: '6-8', description: exerciseDatabase['lat-pulldown'].description, videoUrl: exerciseDatabase['lat-pulldown'].videoUrl },
        { name: exerciseDatabase['dumbbell-row'].name, sets: 3, reps: '8-10', description: exerciseDatabase['dumbbell-row'].description, videoUrl: exerciseDatabase['dumbbell-row'].videoUrl },
        { name: exerciseDatabase['lateral-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['lateral-raise'].description, videoUrl: exerciseDatabase['lateral-raise'].videoUrl }
      ]
    },
    {
      name: { en: 'Day 3 - Legs A', tr: 'Gün 3 – Legs A', de: 'Tag 3 - Beine A' },
      exercises: [
        { name: exerciseDatabase['barbell-squat'].name, sets: 4, reps: '6-8', description: exerciseDatabase['barbell-squat'].description, videoUrl: exerciseDatabase['barbell-squat'].videoUrl },
        { name: exerciseDatabase['glute-bridge'].name, sets: 3, reps: '8-10', description: exerciseDatabase['glute-bridge'].description, videoUrl: exerciseDatabase['glute-bridge'].videoUrl },
        { name: exerciseDatabase['leg-press'].name, sets: 3, reps: '10-12', description: exerciseDatabase['leg-press'].description, videoUrl: exerciseDatabase['leg-press'].videoUrl }
      ]
    },
    {
      name: { en: 'Day 4 - Push B', tr: 'Gün 4 – Push B', de: 'Tag 4 - Push B' },
      exercises: [
        { name: exerciseDatabase['dumbbell-shoulder-press'].name, sets: 4, reps: '8-10', description: exerciseDatabase['dumbbell-shoulder-press'].description, videoUrl: exerciseDatabase['dumbbell-shoulder-press'].videoUrl },
        { name: exerciseDatabase['lateral-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['lateral-raise'].description, videoUrl: exerciseDatabase['lateral-raise'].videoUrl },
        { name: exerciseDatabase['overhead-triceps-extension'].name, sets: 3, reps: '10-12', description: exerciseDatabase['overhead-triceps-extension'].description, videoUrl: exerciseDatabase['overhead-triceps-extension'].videoUrl }
      ]
    },
    {
      name: { en: 'Day 5 - Pull B', tr: 'Gün 5 – Pull B', de: 'Tag 5 - Pull B' },
      exercises: [
        { name: exerciseDatabase['dumbbell-row'].name, sets: 4, reps: '6-8', description: exerciseDatabase['dumbbell-row'].description, videoUrl: exerciseDatabase['dumbbell-row'].videoUrl },
        { name: exerciseDatabase['hammer-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['hammer-curl'].description, videoUrl: exerciseDatabase['hammer-curl'].videoUrl }
      ]
    }
  ]
};
