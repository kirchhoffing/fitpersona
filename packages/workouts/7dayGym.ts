import { exerciseDatabase } from '@fitpersona/exercises';

export const sevenDayGymWorkout = {
  name: {
    en: '7-Day Gym Workout Program',
    tr: '7 Günlük Spor Salonu Antrenman Programı',
    de: '7-Tage Fitnessstudio-Trainingsprogramm'
  },
  description: {
    en: 'An advanced gym-based program designed for daily training, using a muscle group specialization approach to maximize development while allowing for recovery through rotating focus areas.',
    tr: 'Günlük antrenman için tasarlanmış, odak alanlarını değiştirerek toparlanmaya izin verirken gelişimi en üst düzeye çıkarmak için kas grubu uzmanlaşma yaklaşımı kullanan ileri düzey bir spor salonu programı.',
    de: 'Ein fortgeschrittenes Fitnessstudio-Programm für tägliches Training, das einen Muskelgruppen-Spezialisierungsansatz verwendet, um die Entwicklung zu maximieren und gleichzeitig durch rotierende Schwerpunktbereiche Erholung zu ermöglichen.'
  },
  days: [
    {
      name: { en: 'Day 1 - Chest Focus', tr: 'Gün 1 - Göğüs Odaklı', de: 'Tag 1 - Brust-Fokus' },
      exercises: [
        { name: exerciseDatabase['bench-press'].name, sets: 4, reps: '8-10', description: exerciseDatabase['bench-press'].description, videoUrl: exerciseDatabase['bench-press'].videoUrl },
        { name: exerciseDatabase['incline-bench-press'].name, sets: 4, reps: '8-10', description: exerciseDatabase['incline-bench-press'].description, videoUrl: exerciseDatabase['incline-bench-press'].videoUrl },
        { name: exerciseDatabase['pushup'].name, sets: 3, reps: '12-15', description: exerciseDatabase['pushup'].description, videoUrl: exerciseDatabase['pushup'].videoUrl },
        { name: exerciseDatabase['cable-triceps-pushdown'].name, sets: 3, reps: '12-15', description: exerciseDatabase['cable-triceps-pushdown'].description, videoUrl: exerciseDatabase['cable-triceps-pushdown'].videoUrl },
        { name: exerciseDatabase['crunch'].name, sets: 3, reps: '15-20', description: exerciseDatabase['crunch'].description, videoUrl: exerciseDatabase['crunch'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    },
    {
      name: { en: 'Day 2 - Back Focus', tr: 'Gün 2 - Sırt Odaklı', de: 'Tag 2 - Rücken-Fokus' },
      exercises: [
        { name: exerciseDatabase['lat-pulldown'].name, sets: 4, reps: '10-12', description: exerciseDatabase['lat-pulldown'].description, videoUrl: exerciseDatabase['lat-pulldown'].videoUrl },
        { name: exerciseDatabase['seated-cable-row'].name, sets: 4, reps: '10-12', description: exerciseDatabase['seated-cable-row'].description, videoUrl: exerciseDatabase['seated-cable-row'].videoUrl },
        { name: exerciseDatabase['bent-over-row'].name, sets: 3, reps: '8-10', description: exerciseDatabase['bent-over-row'].description, videoUrl: exerciseDatabase['bent-over-row'].videoUrl },
        { name: exerciseDatabase['barbell-curl'].name, sets: 3, reps: '10-12', description: exerciseDatabase['barbell-curl'].description, videoUrl: exerciseDatabase['barbell-curl'].videoUrl },
        { name: exerciseDatabase['plank'].name, sets: 3, reps: '30-45 seconds', description: exerciseDatabase['plank'].description, videoUrl: exerciseDatabase['plank'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    },
    {
      name: { en: 'Day 3 - Legs Focus', tr: 'Gün 3 - Bacak Odaklı', de: 'Tag 3 - Bein-Fokus' },
      exercises: [
        { name: exerciseDatabase['barbell-squat'].name, sets: 4, reps: '8-10', description: exerciseDatabase['barbell-squat'].description, videoUrl: exerciseDatabase['barbell-squat'].videoUrl },
        { name: exerciseDatabase['leg-press'].name, sets: 4, reps: '10-12', description: exerciseDatabase['leg-press'].description, videoUrl: exerciseDatabase['leg-press'].videoUrl },
        { name: exerciseDatabase['romanian-deadlift'].name, sets: 3, reps: '10-12', description: exerciseDatabase['romanian-deadlift'].description, videoUrl: exerciseDatabase['romanian-deadlift'].videoUrl },
        { name: exerciseDatabase['calf-raise'].name, sets: 4, reps: '15-20', description: exerciseDatabase['calf-raise'].description, videoUrl: exerciseDatabase['calf-raise'].videoUrl },
        { name: exerciseDatabase['leg-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['leg-raise'].description, videoUrl: exerciseDatabase['leg-raise'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    },
    {
      name: { en: 'Day 4 - Shoulders Focus', tr: 'Gün 4 - Omuz Odaklı', de: 'Tag 4 - Schulter-Fokus' },
      exercises: [
        { name: exerciseDatabase['dumbbell-shoulder-press'].name, sets: 4, reps: '8-10', description: exerciseDatabase['dumbbell-shoulder-press'].description, videoUrl: exerciseDatabase['dumbbell-shoulder-press'].videoUrl },
        { name: exerciseDatabase['lateral-raise'].name, sets: 4, reps: '12-15', description: exerciseDatabase['lateral-raise'].description, videoUrl: exerciseDatabase['lateral-raise'].videoUrl },
        { name: exerciseDatabase['bent-over-row'].name, sets: 3, reps: '10-12', description: exerciseDatabase['bent-over-row'].description, videoUrl: exerciseDatabase['bent-over-row'].videoUrl },
        { name: exerciseDatabase['overhead-triceps-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['overhead-triceps-extension'].description, videoUrl: exerciseDatabase['overhead-triceps-extension'].videoUrl },
        { name: exerciseDatabase['russian-twist'].name, sets: 3, reps: '15 each side', description: exerciseDatabase['russian-twist'].description, videoUrl: exerciseDatabase['russian-twist'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    },
    {
      name: { en: 'Day 5 - Arms Focus', tr: 'Gün 5 - Kol Odaklı', de: 'Tag 5 - Arm-Fokus' },
      exercises: [
        { name: exerciseDatabase['barbell-curl'].name, sets: 4, reps: '10-12', description: exerciseDatabase['barbell-curl'].description, videoUrl: exerciseDatabase['barbell-curl'].videoUrl },
        { name: exerciseDatabase['hammer-curl'].name, sets: 3, reps: '10-12', description: exerciseDatabase['hammer-curl'].description, videoUrl: exerciseDatabase['hammer-curl'].videoUrl },
        { name: exerciseDatabase['cable-triceps-pushdown'].name, sets: 4, reps: '12-15', description: exerciseDatabase['cable-triceps-pushdown'].description, videoUrl: exerciseDatabase['cable-triceps-pushdown'].videoUrl },
        { name: exerciseDatabase['overhead-triceps-extension'].name, sets: 3, reps: '12-15', description: exerciseDatabase['overhead-triceps-extension'].description, videoUrl: exerciseDatabase['overhead-triceps-extension'].videoUrl },
        { name: exerciseDatabase['dips-chair'].name, sets: 3, reps: '10-12', description: exerciseDatabase['dips-chair'].description, videoUrl: exerciseDatabase['dips-chair'].videoUrl }
      ],
      cardio: {
        en: '10 minutes of moderate-intensity cardio (treadmill, elliptical, or stationary bike)',
        tr: '10 dakika orta yoğunlukta kardio (koşu bandı, eliptik veya sabit bisiklet)',
        de: '10 Minuten Cardio mit mittlerer Intensität (Laufband, Crosstrainer oder stationäres Fahrrad)'
      }
    },
    {
      name: { en: 'Day 6 - Lower Body Focus', tr: 'Gün 6 - Alt Vücut Odaklı', de: 'Tag 6 - Unterkörper-Fokus' },
      exercises: [
        { name: exerciseDatabase['leg-press'].name, sets: 4, reps: '10-12', description: exerciseDatabase['leg-press'].description, videoUrl: exerciseDatabase['leg-press'].videoUrl },
        { name: exerciseDatabase['lunge'].name, sets: 3, reps: '10 per leg', description: exerciseDatabase['lunge'].description, videoUrl: exerciseDatabase['lunge'].videoUrl },
        { name: exerciseDatabase['glute-bridge'].name, sets: 3, reps: '15-20', description: exerciseDatabase['glute-bridge'].description, videoUrl: exerciseDatabase['glute-bridge'].videoUrl },
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
      name: { en: 'Day 7 - Core & Mobility', tr: 'Gün 7 - Core & Hareketlilik', de: 'Tag 7 - Rumpf & Beweglichkeit' },
      exercises: [
        { name: exerciseDatabase['crunch'].name, sets: 3, reps: '15-20', description: exerciseDatabase['crunch'].description, videoUrl: exerciseDatabase['crunch'].videoUrl },
        { name: exerciseDatabase['russian-twist'].name, sets: 3, reps: '15 each side', description: exerciseDatabase['russian-twist'].description, videoUrl: exerciseDatabase['russian-twist'].videoUrl },
        { name: exerciseDatabase['leg-raise'].name, sets: 3, reps: '12-15', description: exerciseDatabase['leg-raise'].description, videoUrl: exerciseDatabase['leg-raise'].videoUrl },
        { name: exerciseDatabase['plank'].name, sets: 3, reps: '45-60 seconds', description: exerciseDatabase['plank'].description, videoUrl: exerciseDatabase['plank'].videoUrl },
        { name: exerciseDatabase['cobra-stretch'].name, sets: 2, reps: '30 seconds hold', description: exerciseDatabase['cobra-stretch'].description, videoUrl: exerciseDatabase['cobra-stretch'].videoUrl }
      ],
      cardio: {
        en: '20 minutes of low-intensity steady-state cardio or mobility work',
        tr: '20 dakika düşük yoğunluklu sabit durum kardiyo veya hareketlilik çalışması',
        de: '20 Minuten Cardio mit niedriger Intensität oder Mobilitätsarbeit'
      }
    }
  ]
};
