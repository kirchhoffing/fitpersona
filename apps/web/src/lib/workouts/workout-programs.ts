import { WorkoutProgram } from '@/types/exercise';
import { exerciseDatabase } from '@/exercise-data';

export const threeDayFullBodyWorkout: WorkoutProgram = {
  id: '3day-full-body',
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
        exerciseDatabase['barbell-squat'],
        exerciseDatabase['bench-press'],
        exerciseDatabase['bent-over-row'],
        exerciseDatabase['plank']
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
        exerciseDatabase['romanian-deadlift'],
        exerciseDatabase['shoulder-press'],
        exerciseDatabase['pullup'],
        exerciseDatabase['cable-biceps-curl'],
        exerciseDatabase['cable-triceps-pushdown']
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
        exerciseDatabase['kettlebell-goblet-squat'],
        exerciseDatabase['pushup'],
        exerciseDatabase['dumbbell-row'],
        exerciseDatabase['leg-raise'],
        exerciseDatabase['russian-twist']
      ],
      cardio: {
        en: '20 minutes walking or cycling (active rest)',
        tr: '20 dakika yürüyüş veya bisiklet (aktif dinlenme)',
        de: '20 Minuten Gehen oder Radfahren (aktive Erholung)'
      }
    }
  ],
  level: 'intermediate',
  duration: '4-6 weeks',
  schedule: '3 days per week',
  tags: ['strength', 'full body', 'muscle building']
};

// You can add more workout programs here
export const workoutPrograms: Record<string, WorkoutProgram> = {
  '3day-full-body': threeDayFullBodyWorkout,
  // Add more programs as needed
}; 