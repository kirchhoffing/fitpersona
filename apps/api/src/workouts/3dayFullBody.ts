import { exerciseDatabase } from '@fitpersona/exercises';

export const threeDayFullBodyWorkout = {
  name: {
    en: '3-Day Full Body Workout Program',
    tr: '3 Günlük Full Body Fitness Programı',
    de: '3-Tage Ganzkörper-Trainingsprogramm'
  },
  description: {
    en: 'A comprehensive full body workout program designed for overall strength and muscle development',
    tr: 'Genel güç ve kas gelişimi için tasarlanmış kapsamlı bir full body antrenman programı',
    de: 'Ein umfassendes Ganzkörper-Trainingsprogramm für allgemeine Kraft und Muskelentwicklung'
  },
  days: [
    {
      name: {
        en: 'Day 1 - Full Body (Weighted Strength)',
        tr: 'Gün 1 – Full Body (Ağırlıklı Güç)',
        de: 'Tag 1 - Ganzkörper (Krafttraining mit Gewichten)'
      },
      exercises: [
        {
          name: exerciseDatabase['barbell-squat'].name,
          sets: 4,
          reps: '6-8',
          description: exerciseDatabase['barbell-squat'].description,
          videoUrl: exerciseDatabase['barbell-squat'].videoUrl
        },
        {
          name: exerciseDatabase['bench-press'].name,
          sets: 4,
          reps: '6-8',
          description: exerciseDatabase['bench-press'].description,
          videoUrl: exerciseDatabase['bench-press'].videoUrl
        },
        {
          name: exerciseDatabase['bent-over-row'].name,
          sets: 4,
          reps: '8-10',
          description: exerciseDatabase['bent-over-row'].description,
          videoUrl: exerciseDatabase['bent-over-row'].videoUrl
        },
        {
          name: exerciseDatabase['plank'].name,
          sets: 3,
          reps: '30-60 seconds',
          description: exerciseDatabase['plank'].description,
          videoUrl: exerciseDatabase['plank'].videoUrl
        }
      ],
      cardio: {
        en: '10 minutes light cardio (optional)',
        tr: '10 dakika hafif kardiyo (opsiyonel)',
        de: '10 Minuten leichtes Cardio (optional)'
      }
    },
    {
      name: {
        en: 'Day 2 - Full Body (Volume & Endurance)',
        tr: 'Gün 2 – Full Body (Hacim & Dayanıklılık)',
        de: 'Tag 2 - Ganzkörper (Volumen & Ausdauer)'
      },
      exercises: [
        {
          name: exerciseDatabase['romanian-deadlift'].name,
          sets: 3,
          reps: '10-12',
          description: exerciseDatabase['romanian-deadlift'].description,
          videoUrl: exerciseDatabase['romanian-deadlift'].videoUrl
        },
        {
          name: exerciseDatabase['shoulder-press'].name,
          sets: 3,
          reps: '10-12',
          description: exerciseDatabase['shoulder-press'].description,
          videoUrl: exerciseDatabase['shoulder-press'].videoUrl
        },
        {
          name: exerciseDatabase['pullup'].name,
          sets: 3,
          reps: '8-10',
          description: exerciseDatabase['pullup'].description,
          videoUrl: exerciseDatabase['pullup'].videoUrl
        },
        {
          name: exerciseDatabase['cable-biceps-curl'].name,
          sets: 3,
          reps: '12-15',
          description: exerciseDatabase['cable-biceps-curl'].description,
          videoUrl: exerciseDatabase['cable-biceps-curl'].videoUrl
        },
        {
          name: exerciseDatabase['cable-triceps-pushdown'].name,
          sets: 3,
          reps: '12-15',
          description: exerciseDatabase['cable-triceps-pushdown'].description,
          videoUrl: exerciseDatabase['cable-triceps-pushdown'].videoUrl
        }
      ],
      cardio: {
        en: '15 minutes interval cardio',
        tr: '15 dakika interval kardiyo',
        de: '15 Minuten Intervall-Cardio'
      }
    },
    {
      name: {
        en: 'Day 3 - Full Body (Functional & Core Focus)',
        tr: 'Gün 3 – Full Body (Fonksiyonel & Core Odaklı)',
        de: 'Tag 3 - Ganzkörper (Funktionell & Core-Fokus)'
      },
      exercises: [
        {
          name: exerciseDatabase['kettlebell-goblet-squat'].name,
          sets: 3,
          reps: '12',
          description: exerciseDatabase['kettlebell-goblet-squat'].description,
          videoUrl: exerciseDatabase['kettlebell-goblet-squat'].videoUrl
        },
        {
          name: exerciseDatabase['pushup'].name,
          sets: 3,
          reps: 'Maximum reps',
          description: exerciseDatabase['pushup'].description,
          videoUrl: exerciseDatabase['pushup'].videoUrl
        },
        {
          name: exerciseDatabase['dumbbell-row'].name,
          sets: 3,
          reps: '10',
          description: exerciseDatabase['dumbbell-row'].description,
          videoUrl: exerciseDatabase['dumbbell-row'].videoUrl
        },
        {
          name: exerciseDatabase['leg-raise'].name,
          sets: 3,
          reps: '15',
          description: exerciseDatabase['leg-raise'].description,
          videoUrl: exerciseDatabase['leg-raise'].videoUrl
        },
        {
          name: exerciseDatabase['russian-twist'].name,
          sets: 3,
          reps: '30 seconds',
          description: exerciseDatabase['russian-twist'].description,
          videoUrl: exerciseDatabase['russian-twist'].videoUrl
        }
      ],
      cardio: {
        en: '20 minutes walking or cycling (active rest)',
        tr: '20 dakika yürüyüş veya bisiklet (aktif dinlenme)',
        de: '20 Minuten Gehen oder Radfahren (aktive Erholung)'
      }
    }
  ]
}; 