import { exerciseDatabase } from '@fitpersona/exercises';

export const threeDayHIITWorkout = {
  name: {
    en: '3-Day Bodyweight Home Workout',
    tr: '3 Günlük Vücut Ağırlığıyla Evde Antrenman',
    de: '3-Tage Körpergewicht Heimtraining'
  },
  description: {
    en: 'A no-equipment workout plan perfect for home training using only bodyweight.',
    tr: 'Sadece vücut ağırlığı kullanılarak evde yapılabilecek ekipmansız bir antrenman planı.',
    de: 'Ein trainingsplan ohne Geräte, ideal für das Training zu Hause mit dem eigenen Körpergewicht.'
  },
  days: [
    {
      name: {
        en: 'Day 1 - Upper Body Strength',
        tr: 'Gün 1 – Üst Vücut Güç',
        de: 'Tag 1 - Oberkörperkraft'
      },
      exercises: [
        {
          name: exerciseDatabase['pushup'].name,
          sets: 3,
          reps: 'Maximum reps',
          description: exerciseDatabase['pushup'].description,
          videoUrl: exerciseDatabase['pushup'].videoUrl
        },
        {
          name: exerciseDatabase['incline-pushup'].name,
          sets: 3,
          reps: '12-15',
          description: exerciseDatabase['incline-pushup'].description,
          videoUrl: exerciseDatabase['incline-pushup'].videoUrl
        },
        {
          name: exerciseDatabase['dips-chair'].name,
          sets: 3,
          reps: '10-12',
          description: exerciseDatabase['dips-chair'].description,
          videoUrl: exerciseDatabase['dips-chair'].videoUrl
        },
        {
          name: exerciseDatabase['plank'].name,
          sets: 3,
          reps: '30-45 seconds',
          description: exerciseDatabase['plank'].description,
          videoUrl: exerciseDatabase['plank'].videoUrl
        }
      ],
      cardio: {
        en: '5-minute arm circles and jumping jacks',
        tr: '5 dakika kol çevirme ve jumping jack',
        de: '5 Minuten Armkreisen und Hampelmänner'
      }
    },
    {
      name: {
        en: 'Day 2 - Lower Body Strength',
        tr: 'Gün 2 – Alt Vücut Güç',
        de: 'Tag 2 - Unterkörperkraft'
      },
      exercises: [
        {
          name: exerciseDatabase['bodyweight-squat'].name,
          sets: 4,
          reps: '15-20',
          description: exerciseDatabase['bodyweight-squat'].description,
          videoUrl: exerciseDatabase['bodyweight-squat'].videoUrl
        },
        {
          name: exerciseDatabase['glute-bridge'].name,
          sets: 3,
          reps: '15',
          description: exerciseDatabase['glute-bridge'].description,
          videoUrl: exerciseDatabase['glute-bridge'].videoUrl
        },
        {
          name: exerciseDatabase['lunge'].name,
          sets: 3,
          reps: '10 per leg',
          description: exerciseDatabase['lunge'].description,
          videoUrl: exerciseDatabase['lunge'].videoUrl
        },
        {
          name: exerciseDatabase['wall-sit'].name,
          sets: 3,
          reps: '30 seconds',
          description: exerciseDatabase['wall-sit'].description,
          videoUrl: exerciseDatabase['wall-sit'].videoUrl
        }
      ],
      cardio: {
        en: '10-minute brisk walk or stairs at home',
        tr: '10 dakika tempolu yürüyüş veya ev içi merdiven çıkma',
        de: '10 Minuten zügiges Gehen oder Treppensteigen zu Hause'
      }
    },
    {
      name: {
        en: 'Day 3 - Core & Mobility',
        tr: 'Gün 3 – Core & Esneklik',
        de: 'Tag 3 - Core & Mobilität'
      },
      exercises: [
        {
          name: exerciseDatabase['crunch'].name,
          sets: 3,
          reps: '15-20',
          description: exerciseDatabase['crunch'].description,
          videoUrl: exerciseDatabase['crunch'].videoUrl
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
        },
        {
          name: exerciseDatabase['cobra-stretch'].name,
          sets: 2,
          reps: '30 seconds hold',
          description: exerciseDatabase['cobra-stretch'].description,
          videoUrl: exerciseDatabase['cobra-stretch'].videoUrl
        }
      ],
      cardio: {
        en: '15-minute yoga or stretching flow',
        tr: '15 dakika yoga veya esneme akışı',
        de: '15 Minuten Yoga oder Stretching-Flow'
      }
    }
  ]
};
