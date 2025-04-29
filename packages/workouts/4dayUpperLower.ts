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
        { name: exerciseDatabase['bench-press'].name, sets: 4, reps: '6-8', description: exerciseDatabase['bench-press'].description, videoUrl: exerciseDatabase['bench-press'].videoUrl },
        { name: exerciseDatabase['bent-over-row'].name, sets: 4, reps: '6-8', description: exerciseDatabase['bent-over-row'].description, videoUrl: exerciseDatabase['bent-over-row'].videoUrl },
        { name: exerciseDatabase['shoulder-press'].name, sets: 3, reps: '8-10', description: exerciseDatabase['shoulder-press'].description, videoUrl: exerciseDatabase['shoulder-press'].videoUrl },
        { name: exerciseDatabase['pullup'].name, sets: 3, reps: '8-10', description: exerciseDatabase['pullup'].description, videoUrl: exerciseDatabase['pullup'].videoUrl }
      ]
    },
    {
      name: { en: 'Day 2 - Lower Body A', tr: 'Gün 2 – Alt Vücut A', de: 'Tag 2 - Unterkörper A' },
      exercises: [
        { name: exerciseDatabase['barbell-squat'].name, sets: 4, reps: '6-8', description: exerciseDatabase['barbell-squat'].description, videoUrl: exerciseDatabase['barbell-squat'].videoUrl },
        { name: exerciseDatabase['romanian-deadlift'].name, sets: 3, reps: '8-10', description: exerciseDatabase['romanian-deadlift'].description, videoUrl: exerciseDatabase['romanian-deadlift'].videoUrl },
        { name: exerciseDatabase['leg-press'].name, sets: 3, reps: '10-12', description: exerciseDatabase['leg-press'].description, videoUrl: exerciseDatabase['leg-press'].videoUrl },
        { name: exerciseDatabase['calf-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['calf-raise'].description, videoUrl: exerciseDatabase['calf-raise'].videoUrl }
      ]
    },
    {
      name: { en: 'Day 3 - Upper Body B', tr: 'Gün 3 – Üst Vücut B', de: 'Tag 3 - Oberkörper B' },
      exercises: [
        { name: exerciseDatabase['incline-bench-press'].name, sets: 4, reps: '8-10', description: exerciseDatabase['incline-bench-press'].description, videoUrl: exerciseDatabase['incline-bench-press'].videoUrl },
        { name: exerciseDatabase['seated-row'].name, sets: 4, reps: '8-10', description: exerciseDatabase['seated-row'].description, videoUrl: exerciseDatabase['seated-row'].videoUrl },
        { name: exerciseDatabase['lateral-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['lateral-raise'].description, videoUrl: exerciseDatabase['lateral-raise'].videoUrl },
        { name: exerciseDatabase['tricep-dip'].name, sets: 3, reps: '8-12', description: exerciseDatabase['tricep-dip'].description, videoUrl: exerciseDatabase['tricep-dip'].videoUrl }
      ]
    },
    {
      name: { en: 'Day 4 - Lower Body B', tr: 'Gün 4 – Alt Vücut B', de: 'Tag 4 - Unterkörper B' },
      exercises: [
        { name: exerciseDatabase['front-squat'].name, sets: 4, reps: '6-8', description: exerciseDatabase['front-squat'].description, videoUrl: exerciseDatabase['front-squat'].videoUrl },
        { name: exerciseDatabase['deadlift'].name, sets: 3, reps: '5-7', description: exerciseDatabase['deadlift'].description, videoUrl: exerciseDatabase['deadlift'].videoUrl },
        { name: exerciseDatabase['leg-curl'].name, sets: 3, reps: '10-12', description: exerciseDatabase['leg-curl'].description, videoUrl: exerciseDatabase['leg-curl'].videoUrl },
        { name: exerciseDatabase['calf-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['calf-raise'].description, videoUrl: exerciseDatabase['calf-raise'].videoUrl }
      ]
    }
  ]
};
