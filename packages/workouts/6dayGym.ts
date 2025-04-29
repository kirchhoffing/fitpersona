import { exerciseDatabase } from '@fitpersona/exercises';

export const sixDayGymWorkout = {
  name: {
    en: '6-Day Gym Workout Program',
    tr: '6 Günlük Spor Salonu Antrenman Programı',
    de: '6-Tage Fitnessstudio-Trainingsprogramm'
  },
  description: {
    en: 'An advanced gym-based program designed for six training days per week, following a push/pull/legs split repeated twice weekly for maximum muscle development and strength gains.',
    tr: 'Haftada altı antrenman günü için tasarlanmış, maksimum kas gelişimi ve güç artışı için haftada iki kez tekrarlanan itme/çekme/bacak bölünmesini takip eden ileri düzey bir spor salonu programı.',
    de: 'Ein fortgeschrittenes Fitnessstudio-Programm für sechs Trainingstage pro Woche, das einem zweimal wöchentlich wiederholten Drücken/Ziehen/Beine-Split für maximale Muskelentwicklung und Kraftzuwachs folgt.'
  },
  days: [
    {
      name: { en: 'Day 1 - Push A', tr: 'Gün 1 - İtme A', de: 'Tag 1 - Drücken A' },
      exercises: [
        { name: exerciseDatabase['bench-press'].name, sets: 4, reps: '8-10', description: exerciseDatabase['bench-press'].description, videoUrl: exerciseDatabase['bench-press'].videoUrl },
        { name: exerciseDatabase['incline-bench-press'].name, sets: 3, reps: '8-10', description: exerciseDatabase['incline-bench-press'].description, videoUrl: exerciseDatabase['incline-bench-press'].videoUrl },
        { name: exerciseDatabase['dumbbell-shoulder-press'].name, sets: 3, reps: '10-12', description: exerciseDatabase['dumbbell-shoulder-press'].description, videoUrl: exerciseDatabase['dumbbell-shoulder-press'].videoUrl },
        { name: exerciseDatabase['lateral-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['lateral-raise'].description, videoUrl: exerciseDatabase['lateral-raise'].videoUrl },
        { name: exerciseDatabase['cable-triceps-pushdown'].name, sets: 3, reps: '12-15', description: exerciseDatabase['cable-triceps-pushdown'].description, videoUrl: exerciseDatabase['cable-triceps-pushdown'].videoUrl },
        { name: exerciseDatabase['overhead-triceps-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['overhead-triceps-extension'].description, videoUrl: exerciseDatabase['overhead-triceps-extension'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    },
    {
      name: { en: 'Day 2 - Pull A', tr: 'Gün 2 - Çekme A', de: 'Tag 2 - Ziehen A' },
      exercises: [
        { name: exerciseDatabase['lat-pulldown'].name, sets: 4, reps: '10-12', description: exerciseDatabase['lat-pulldown'].description, videoUrl: exerciseDatabase['lat-pulldown'].videoUrl },
        { name: exerciseDatabase['seated-cable-row'].name, sets: 3, reps: '10-12', description: exerciseDatabase['seated-cable-row'].description, videoUrl: exerciseDatabase['seated-cable-row'].videoUrl },
        { name: exerciseDatabase['bent-over-row'].name, sets: 3, reps: '8-10', description: exerciseDatabase['bent-over-row'].description, videoUrl: exerciseDatabase['bent-over-row'].videoUrl },
        { name: exerciseDatabase['barbell-curl'].name, sets: 3, reps: '10-12', description: exerciseDatabase['barbell-curl'].description, videoUrl: exerciseDatabase['barbell-curl'].videoUrl },
        { name: exerciseDatabase['hammer-curl'].name, sets: 3, reps: '10-12', description: exerciseDatabase['hammer-curl'].description, videoUrl: exerciseDatabase['hammer-curl'].videoUrl },
        { name: exerciseDatabase['cable-biceps-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['cable-biceps-curl'].description, videoUrl: exerciseDatabase['cable-biceps-curl'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    },
    {
      name: { en: 'Day 3 - Legs A', tr: 'Gün 3 - Bacaklar A', de: 'Tag 3 - Beine A' },
      exercises: [
        { name: exerciseDatabase['barbell-squat'].name, sets: 4, reps: '8-10', description: exerciseDatabase['barbell-squat'].description, videoUrl: exerciseDatabase['barbell-squat'].videoUrl },
        { name: exerciseDatabase['leg-press'].name, sets: 3, reps: '10-12', description: exerciseDatabase['leg-press'].description, videoUrl: exerciseDatabase['leg-press'].videoUrl },
        { name: exerciseDatabase['lunge'].name, sets: 3, reps: '10 per leg', description: exerciseDatabase['lunge'].description, videoUrl: exerciseDatabase['lunge'].videoUrl },
        { name: exerciseDatabase['romanian-deadlift'].name, sets: 3, reps: '10-12', description: exerciseDatabase['romanian-deadlift'].description, videoUrl: exerciseDatabase['romanian-deadlift'].videoUrl },
        { name: exerciseDatabase['calf-raise'].name, sets: 4, reps: '15-20', description: exerciseDatabase['calf-raise'].description, videoUrl: exerciseDatabase['calf-raise'].videoUrl },
        { name: exerciseDatabase['crunch'].name, sets: 3, reps: '15-20', description: exerciseDatabase['crunch'].description, videoUrl: exerciseDatabase['crunch'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    },
    {
      name: { en: 'Day 4 - Push B', tr: 'Gün 4 - İtme B', de: 'Tag 4 - Drücken B' },
      exercises: [
        { name: exerciseDatabase['incline-bench-press'].name, sets: 4, reps: '8-10', description: exerciseDatabase['incline-bench-press'].description, videoUrl: exerciseDatabase['incline-bench-press'].videoUrl },
        { name: exerciseDatabase['bench-press'].name, sets: 3, reps: '8-10', description: exerciseDatabase['bench-press'].description, videoUrl: exerciseDatabase['bench-press'].videoUrl },
        { name: exerciseDatabase['lateral-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['lateral-raise'].description, videoUrl: exerciseDatabase['lateral-raise'].videoUrl },
        { name: exerciseDatabase['dumbbell-shoulder-press'].name, sets: 3, reps: '10-12', description: exerciseDatabase['dumbbell-shoulder-press'].description, videoUrl: exerciseDatabase['dumbbell-shoulder-press'].videoUrl },
        { name: exerciseDatabase['overhead-triceps-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['overhead-triceps-extension'].description, videoUrl: exerciseDatabase['overhead-triceps-extension'].videoUrl },
        { name: exerciseDatabase['cable-triceps-pushdown'].name, sets: 3, reps: '12-15', description: exerciseDatabase['cable-triceps-pushdown'].description, videoUrl: exerciseDatabase['cable-triceps-pushdown'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    },
    {
      name: { en: 'Day 5 - Pull B', tr: 'Gün 5 - Çekme B', de: 'Tag 5 - Ziehen B' },
      exercises: [
        { name: exerciseDatabase['pullup'].name, sets: 4, reps: 'Max (8-12)', description: exerciseDatabase['pullup'].description, videoUrl: exerciseDatabase['pullup'].videoUrl },
        { name: exerciseDatabase['bent-over-row'].name, sets: 3, reps: '8-10', description: exerciseDatabase['bent-over-row'].description, videoUrl: exerciseDatabase['bent-over-row'].videoUrl },
        { name: exerciseDatabase['seated-cable-row'].name, sets: 3, reps: '10-12', description: exerciseDatabase['seated-cable-row'].description, videoUrl: exerciseDatabase['seated-cable-row'].videoUrl },
        { name: exerciseDatabase['cable-biceps-curl'].name, sets: 3, reps: '12-15', description: exerciseDatabase['cable-biceps-curl'].description, videoUrl: exerciseDatabase['cable-biceps-curl'].videoUrl },
        { name: exerciseDatabase['barbell-curl'].name, sets: 3, reps: '10-12', description: exerciseDatabase['barbell-curl'].description, videoUrl: exerciseDatabase['barbell-curl'].videoUrl },
        { name: exerciseDatabase['russian-twist'].name, sets: 3, reps: '15 each side', description: exerciseDatabase['russian-twist'].description, videoUrl: exerciseDatabase['russian-twist'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    },
    {
      name: { en: 'Day 6 - Legs B', tr: 'Gün 6 - Bacaklar B', de: 'Tag 6 - Beine B' },
      exercises: [
        { name: exerciseDatabase['leg-press'].name, sets: 4, reps: '10-12', description: exerciseDatabase['leg-press'].description, videoUrl: exerciseDatabase['leg-press'].videoUrl },
        { name: exerciseDatabase['lunge'].name, sets: 3, reps: '10 per leg', description: exerciseDatabase['lunge'].description, videoUrl: exerciseDatabase['lunge'].videoUrl },
        { name: exerciseDatabase['romanian-deadlift'].name, sets: 3, reps: '10-12', description: exerciseDatabase['romanian-deadlift'].description, videoUrl: exerciseDatabase['romanian-deadlift'].videoUrl },
        { name: exerciseDatabase['glute-bridge'].name, sets: 3, reps: '15-20', description: exerciseDatabase['glute-bridge'].description, videoUrl: exerciseDatabase['glute-bridge'].videoUrl },
        { name: exerciseDatabase['calf-raise'].name, sets: 4, reps: '15-20', description: exerciseDatabase['calf-raise'].description, videoUrl: exerciseDatabase['calf-raise'].videoUrl },
        { name: exerciseDatabase['leg-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['leg-raise'].description, videoUrl: exerciseDatabase['leg-raise'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    }
  ]
};
