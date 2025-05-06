import { exerciseDatabase } from '@fitpersona/exercises';

export const twoDayGymWorkout = {
  name: {
    en: '2-Day Gym Workout Program',
    tr: '2 Günlük Spor Salonu Antrenman Programı',
    de: '2-Tage Fitnessstudio-Trainingsprogramm'
  },
  description: {
    en: 'An efficient gym-based program designed for those with limited time, focusing on full-body workouts to maximize results.',
    tr: 'Sınırlı zamanı olanlar için tasarlanmış, sonuçları en üst düzeye çıkarmak için tüm vücut antrenmanlarına odaklanan verimli bir spor salonu programı.',
    de: 'Ein effizientes Fitnessstudio-Programm für Personen mit begrenzter Zeit, das sich auf Ganzkörpertraining konzentriert, um maximale Ergebnisse zu erzielen.'
  },
  days: [
    {
      name: { en: 'Day 1 - Push Focus', tr: 'Gün 1 - İtme Odaklı', de: 'Tag 1 - Drück-Fokus' },
      exercises: [
        { name: exerciseDatabase['barbell-squat'].name, sets: 4, reps: '8-10', description: exerciseDatabase['barbell-squat'].description, videoUrl: exerciseDatabase['barbell-squat'].videoUrl },
        { name: exerciseDatabase['incline-bench-press'].name, sets: 4, reps: '8-10', description: exerciseDatabase['incline-bench-press'].description, videoUrl: exerciseDatabase['incline-bench-press'].videoUrl },
        { name: exerciseDatabase['dumbbell-shoulder-press'].name, sets: 3, reps: '10-12', description: exerciseDatabase['dumbbell-shoulder-press'].description, videoUrl: exerciseDatabase['dumbbell-shoulder-press'].videoUrl },
        { name: exerciseDatabase['overhead-triceps-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['overhead-triceps-extension'].description, videoUrl: exerciseDatabase['overhead-triceps-extension'].videoUrl },
        { name: exerciseDatabase['calf-raise'].name, sets: 3, reps: '15-20', description: exerciseDatabase['calf-raise'].description, videoUrl: exerciseDatabase['calf-raise'].videoUrl },
        { name: exerciseDatabase['plank'].name, sets: 3, reps: '30-45 seconds', description: exerciseDatabase['plank'].description, videoUrl: exerciseDatabase['plank'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    },
    {
      name: { en: 'Day 2 - Pull Focus', tr: 'Gün 2 - Çekme Odaklı', de: 'Tag 2 - Zieh-Fokus' },
      exercises: [
        { name: exerciseDatabase['glute-bridge'].name, sets: 4, reps: '8-10', description: exerciseDatabase['glute-bridge'].description, videoUrl: exerciseDatabase['glute-bridge'].videoUrl },
        { name: exerciseDatabase['lat-pulldown'].name, sets: 4, reps: '10-12', description: exerciseDatabase['lat-pulldown'].description, videoUrl: exerciseDatabase['lat-pulldown'].videoUrl },
        { name: exerciseDatabase['dumbbell-row'].name, sets: 3, reps: '10-12', description: exerciseDatabase['dumbbell-row'].description, videoUrl: exerciseDatabase['dumbbell-row'].videoUrl },
        { name: exerciseDatabase['barbell-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['barbell-curl'].description, videoUrl: exerciseDatabase['barbell-curl'].videoUrl },
        { name: exerciseDatabase['lunge'].name, sets: 3, reps: '10 per leg', description: exerciseDatabase['lunge'].description, videoUrl: exerciseDatabase['lunge'].videoUrl },
        { name: exerciseDatabase['russian-twist'].name, sets: 3, reps: '15 each side', description: exerciseDatabase['russian-twist'].description, videoUrl: exerciseDatabase['russian-twist'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    }
  ]
};
