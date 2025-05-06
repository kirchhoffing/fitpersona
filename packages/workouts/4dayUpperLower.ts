import { exerciseDatabase } from '@fitpersona/exercises';

export const fourDayUpperLowerWorkout = {
  name: {
    en: '4-Day Upper/Lower Split Workout Program',
    tr: '4 Günlük Upper/Lower Split Programı',
    de: '4-Tage Upper/Lower Split Trainingsprogramm'
  },
  description: {
    en: 'An intermediate split alternating upper and lower body sessions twice a week.',
    tr: 'Haftada iki kez üst ve alt vücut antrenmanlarını sırayla yapan orta seviye program.',
    de: 'Ein mittleres Split-Programm, das zweimal pro Woche abwechselnd Ober- und Unterkörpersitzungen durchführt.'
  },
  days: [
    {
      name: { en: 'Day 1 - Upper Body A', tr: 'Gün 1 – Üst Vücut A', de: 'Tag 1 - Oberkörper A' },
      exercises: [
        { name: exerciseDatabase['incline-bench-press'].name, sets: 4, reps: '6-8', description: exerciseDatabase['incline-bench-press'].description, videoUrl: exerciseDatabase['incline-bench-press'].videoUrl },
        { name: exerciseDatabase['dumbbell-row'].name, sets: 4, reps: '6-8', description: exerciseDatabase['dumbbell-row'].description, videoUrl: exerciseDatabase['dumbbell-row'].videoUrl },
        { name: exerciseDatabase['dumbbell-shoulder-press'].name, sets: 3, reps: '8-10', description: exerciseDatabase['dumbbell-shoulder-press'].description, videoUrl: exerciseDatabase['dumbbell-shoulder-press'].videoUrl },
        { name: exerciseDatabase['lat-pulldown'].name, sets: 3, reps: '8-10', description: exerciseDatabase['lat-pulldown'].description, videoUrl: exerciseDatabase['lat-pulldown'].videoUrl }
      ]
    },
    {
      name: { en: 'Day 2 - Lower Body A', tr: 'Gün 2 – Alt Vücut A', de: 'Tag 2 - Unterkörper A' },
      exercises: [
        { name: exerciseDatabase['barbell-squat'].name, sets: 4, reps: '6-8', description: exerciseDatabase['barbell-squat'].description, videoUrl: exerciseDatabase['barbell-squat'].videoUrl },
        { name: exerciseDatabase['glute-bridge'].name, sets: 3, reps: '8-10', description: exerciseDatabase['glute-bridge'].description, videoUrl: exerciseDatabase['glute-bridge'].videoUrl },
        { name: exerciseDatabase['leg-press'].name, sets: 3, reps: '10-12', description: exerciseDatabase['leg-press'].description, videoUrl: exerciseDatabase['leg-press'].videoUrl },
        { name: exerciseDatabase['calf-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['calf-raise'].description, videoUrl: exerciseDatabase['calf-raise'].videoUrl }
      ]
    },
    {
      name: { en: 'Day 3 - Upper Body B', tr: 'Gün 3 – Üst Vücut B', de: 'Tag 3 - Oberkörper B' },
      exercises: [
        { name: exerciseDatabase['incline-bench-press'].name, sets: 4, reps: '8-10', description: exerciseDatabase['incline-bench-press'].description, videoUrl: exerciseDatabase['incline-bench-press'].videoUrl },
        { name: exerciseDatabase['dumbbell-row'].name, sets: 4, reps: '8-10', description: exerciseDatabase['dumbbell-row'].description, videoUrl: exerciseDatabase['dumbbell-row'].videoUrl },
        { name: exerciseDatabase['lateral-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['lateral-raise'].description, videoUrl: exerciseDatabase['lateral-raise'].videoUrl },
        { name: exerciseDatabase['overhead-triceps-extension'].name, sets: 3, reps: '8-12', description: exerciseDatabase['overhead-triceps-extension'].description, videoUrl: exerciseDatabase['overhead-triceps-extension'].videoUrl }
      ]
    },
    {
      name: { en: 'Day 4 - Lower Body B', tr: 'Gün 4 – Alt Vücut B', de: 'Tag 4 - Unterkörper B' },
      exercises: [
        { name: exerciseDatabase['bodyweight-squat'].name, sets: 4, reps: '6-8', description: exerciseDatabase['bodyweight-squat'].description, videoUrl: exerciseDatabase['bodyweight-squat'].videoUrl },
        { name: exerciseDatabase['glute-bridge'].name, sets: 3, reps: '5-7', description: exerciseDatabase['glute-bridge'].description, videoUrl: exerciseDatabase['glute-bridge'].videoUrl },
        { name: exerciseDatabase['leg-press'].name, sets: 3, reps: '10-12', description: exerciseDatabase['leg-press'].description, videoUrl: exerciseDatabase['leg-press'].videoUrl },
        { name: exerciseDatabase['calf-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['calf-raise'].description, videoUrl: exerciseDatabase['calf-raise'].videoUrl }
      ]
    }
  ]
};
