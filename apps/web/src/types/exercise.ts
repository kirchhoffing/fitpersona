export type Locale = 'en' | 'tr' | 'de';

export interface Exercise {
  id?: string;
  name: string;
  description: Record<Locale, string>;
  videoUrl?: string;
  imageUrl?: string;
  category?: ExerciseCategory;
  equipment?: Equipment[];
  muscleGroups?: MuscleGroup[];
  difficulty?: Difficulty;
  healthRisks?: string[];
}

export type ExerciseCategory = 
  | 'compound'
  | 'isolation'
  | 'functional'
  | 'bodyweight'
  | 'core';

export type Equipment =
  | 'barbell'
  | 'dumbbell'
  | 'kettlebell'
  | 'cable'
  | 'machine'
  | 'bodyweight'
  | 'resistance bands'
  | 'bench'
  | 'pullup bar';

export type MuscleGroup =
  | 'chest'
  | 'back' // legacy, to be migrated
  | 'upper_back'
  | 'lower_back'
  | 'shoulders'
  | 'triceps'
  | 'biceps'
  | 'forearms'
  | 'quadriceps'
  | 'hamstrings'
  | 'glutes'
  | 'calves'
  | 'core'
  | 'abdominals'
  | 'obliques';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Day {
  name: Record<Locale, string>;
  exercises: Exercise[];
  cardio: Record<Locale, string>;
}

export interface WorkoutProgram {
  id: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  days: Day[];
  level?: Difficulty;
  duration?: string;
  schedule?: string;
  tags?: string[];
} 