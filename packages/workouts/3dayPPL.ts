import { exerciseDatabase } from '@fitpersona/exercises';

export const threeDayPPLWorkout = {
  name: {
    en: '3-Day Push/Pull/Legs Workout Program',
    tr: '3 Günlük Push/Pull/Legs Antrenman Programı',
    de: '3-Tage Push/Pull/Beine Trainingsprogramm'
  },
  description: {
    en: 'A balanced 3-day split targeting push, pull, and lower body muscles for hypertrophy and definition.',
    tr: 'Kas hipertrofisi ve tanımı için push, pull ve alt vücut kaslarını hedefleyen dengeli bir 3 günlük bölünmüş program.',
    de: 'Ein ausgewogenes 3-Tage-Split-Programm für Hypertrophie und Definition, das Push-, Pull- und Unterkörpermuskeln anspricht.'
  },
  days: [
    {
      name: {
        en: 'Day 1 - Push (Chest, Shoulders, Triceps)',
        tr: 'Gün 1 – Push (Göğüs, Omuz, Triceps)',
        de: 'Tag 1 - Push (Brust, Schultern, Trizeps)'
      },
      exercises: [
        {
          name: exerciseDatabase['incline-bench-press'].name,
          sets: 4,
          reps: '8-10',
          description: exerciseDatabase['incline-bench-press'].description,
          videoUrl: exerciseDatabase['incline-bench-press'].videoUrl
        },
        {
          name: exerciseDatabase['dumbbell-shoulder-press'].name,
          sets: 3,
          reps: '10-12',
          description: exerciseDatabase['dumbbell-shoulder-press'].description,
          videoUrl: exerciseDatabase['dumbbell-shoulder-press'].videoUrl
        },
        {
          name: exerciseDatabase['lateral-raise'].name,
          sets: 3,
          reps: '12-15',
          description: exerciseDatabase['lateral-raise'].description,
          videoUrl: exerciseDatabase['lateral-raise'].videoUrl
        },
        {
          name: exerciseDatabase['overhead-triceps-extension'].name,
          sets: 3,
          reps: '12',
          description: exerciseDatabase['overhead-triceps-extension'].description,
          videoUrl: exerciseDatabase['overhead-triceps-extension'].videoUrl
        }
      ],
      cardio: {
        en: '10 minutes incline treadmill walk',
        tr: '10 dakika eğimli yürüyüş bandı yürüyüşü',
        de: '10 Minuten Steigungslaufband-Gehen'
      }
    },
    {
      name: {
        en: 'Day 2 - Pull (Back, Biceps)',
        tr: 'Gün 2 – Pull (Sırt, Biceps)',
        de: 'Tag 2 - Pull (Rücken, Bizeps)'
      },
      exercises: [
        {
          name: exerciseDatabase['lat-pulldown'].name,
          sets: 4,
          reps: '10-12',
          description: exerciseDatabase['lat-pulldown'].description,
          videoUrl: exerciseDatabase['lat-pulldown'].videoUrl
        },
        {
          name: exerciseDatabase['seated-cable-row'].name,
          sets: 4,
          reps: '10-12',
          description: exerciseDatabase['seated-cable-row'].description,
          videoUrl: exerciseDatabase['seated-cable-row'].videoUrl
        },
        {
          name: exerciseDatabase['barbell-curl'].name,
          sets: 3,
          reps: '10-12',
          description: exerciseDatabase['barbell-curl'].description,
          videoUrl: exerciseDatabase['barbell-curl'].videoUrl
        },
        {
          name: exerciseDatabase['hammer-curl'].name,
          sets: 3,
          reps: '12-15',
          description: exerciseDatabase['hammer-curl'].description,
          videoUrl: exerciseDatabase['hammer-curl'].videoUrl
        }
      ],
      cardio: {
        en: '15 minutes rowing machine',
        tr: '15 dakika kürek çekme makinesi',
        de: '15 Minuten Rudermaschine'
      }
    },
    {
      name: {
        en: 'Day 3 - Legs (Quads, Glutes, Hamstrings)',
        tr: 'Gün 3 – Bacak (Quadriceps, Kalça, Hamstring)',
        de: 'Tag 3 - Beine (Quadrizeps, Gesäß, Beinbeuger)'
      },
      exercises: [
        {
          name: exerciseDatabase['barbell-squat'].name,
          sets: 4,
          reps: '8',
          description: exerciseDatabase['barbell-squat'].description,
          videoUrl: exerciseDatabase['barbell-squat'].videoUrl
        },
        {
          name: exerciseDatabase['romanian-deadlift'].name,
          sets: 3,
          reps: '10',
          description: exerciseDatabase['romanian-deadlift'].description,
          videoUrl: exerciseDatabase['romanian-deadlift'].videoUrl
        },
        {
          name: exerciseDatabase['leg-press'].name,
          sets: 3,
          reps: '12',
          description: exerciseDatabase['leg-press'].description,
          videoUrl: exerciseDatabase['leg-press'].videoUrl
        },
        {
          name: exerciseDatabase['calf-raise'].name,
          sets: 4,
          reps: '15-20',
          description: exerciseDatabase['calf-raise'].description,
          videoUrl: exerciseDatabase['calf-raise'].videoUrl
        }
      ],
      cardio: {
        en: '20 minutes cycling (moderate intensity)',
        tr: '20 dakika bisiklet (orta şiddet)',
        de: '20 Minuten Radfahren (mittlere Intensität)'
      }
    }
  ]
};
