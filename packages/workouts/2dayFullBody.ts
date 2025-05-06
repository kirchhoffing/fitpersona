import { exerciseDatabase } from '@fitpersona/exercises';

export const twoDayFullBodyWorkout = {
  name: {
    en: '2-Day Full Body Workout Program',
    tr: '2 Günlük Full Body Fitness Programı',
    de: '2-Tage Ganzkörper-Trainingsprogramm'
  },
  description: {
    en: 'Beginner-friendly full body sessions twice a week to build foundational strength.',
    tr: 'Temel güç oluşturmak için haftada iki kez yapılan başlangıç seviyesinde full body antrenmanları.',
    de: 'Anfängerfreundliches Ganzkörpertraining zweimal pro Woche zur Stärkung der Grundlagen.'
  },
  days: [
    {
      name: { en: 'Day 1 - Full Body A', tr: 'Gün 1 – Full Body A', de: 'Tag 1 - Ganzkörper A' },
      exercises: [
        { name: exerciseDatabase['bodyweight-squat'].name, sets: 3, reps: '12', description: exerciseDatabase['bodyweight-squat'].description, videoUrl: exerciseDatabase['bodyweight-squat'].videoUrl },
        { name: exerciseDatabase['pushup'].name, sets: 3, reps: '10', description: exerciseDatabase['pushup'].description, videoUrl: exerciseDatabase['pushup'].videoUrl },
        { name: exerciseDatabase['plank'].name, sets: 3, reps: '30-45 seconds', description: exerciseDatabase['plank'].description, videoUrl: exerciseDatabase['plank'].videoUrl }
      ]
    },
    {
      name: { en: 'Day 2 - Full Body B', tr: 'Gün 2 – Full Body B', de: 'Tag 2 - Ganzkörper B' },
      exercises: [
        { name: exerciseDatabase['lunge'].name, sets: 3, reps: '10 per leg', description: exerciseDatabase['lunge'].description, videoUrl: exerciseDatabase['lunge'].videoUrl },
        { name: exerciseDatabase['dumbbell-row'].name, sets: 3, reps: '12', description: exerciseDatabase['dumbbell-row'].description, videoUrl: exerciseDatabase['dumbbell-row'].videoUrl },
        { name: exerciseDatabase['dumbbell-shoulder-press'].name, sets: 3, reps: '10-12', description: exerciseDatabase['dumbbell-shoulder-press'].description, videoUrl: exerciseDatabase['dumbbell-shoulder-press'].videoUrl }
      ]
    }
  ]
};
