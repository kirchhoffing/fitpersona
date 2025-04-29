// Central mapping for user choices to workout programs
// Extend this object to add new programs or criteria

// Import all available workout programs
import { threeDayBodyweightWorkout } from './3dayBodyweightHome';
import { threeDayFullBodyWorkout } from './3dayFullBody';
import { threeDayHIITWorkout } from './3dayHIIT';
import { threeDayPPLWorkout } from './3dayPPL';

// Define types for user criteria
export type WorkoutCriteria = {
  goal: 'lose_weight' | 'gain_muscle' | 'maintain_fitness';
  workoutLocation: 'home' | 'gym';
  activityLevel?: string;
  // Add more as needed
};

// Example mapping: extend as new programs/criteria are added
const programMap: Array<{
  match: (criteria: WorkoutCriteria) => boolean;
  program: any;
}> = [
  {
    match: ({ goal, workoutLocation }) => goal === 'lose_weight' && workoutLocation === 'home',
    program: threeDayHIITWorkout,
  },
  {
    match: ({ goal, workoutLocation }) => goal === 'gain_muscle' && workoutLocation === 'home',
    program: threeDayBodyweightWorkout,
  },
  {
    match: ({ goal, workoutLocation }) => goal === 'gain_muscle' && workoutLocation === 'gym',
    program: threeDayPPLWorkout,
  },
  {
    match: ({ goal, workoutLocation }) => goal === 'lose_weight' && workoutLocation === 'gym',
    program: threeDayFullBodyWorkout,
  },
  // fallback
  {
    match: () => true,
    program: threeDayBodyweightWorkout,
  },
];

// Main function to select a program
export function selectWorkoutProgram(criteria: WorkoutCriteria) {
  const found = programMap.find(({ match }) => match(criteria));
  return found?.program;
}

// Export for dynamic import (if needed)
export const allPrograms = {
  threeDayBodyweightWorkout,
  threeDayFullBodyWorkout,
  threeDayHIITWorkout,
  threeDayPPLWorkout,
};
