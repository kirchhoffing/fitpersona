// Central mapping for user choices to workout programs
// Extend this object to add new programs or criteria

// Import all available workout programs
import { threeDayBodyweightWorkout } from './3dayBodyweightHome';
import { threeDayFullBodyWorkout } from './3dayFullBody';
import { threeDayHIITWorkout } from './3dayHIIT';
import { threeDayPPLWorkout } from './3dayPPL';
import { twoDayFullBodyWorkout } from './2dayFullBody';
import { twoDayGymWorkout } from './2dayGym';
import { fourDayUpperLowerWorkout } from './4dayUpperLower';
import { fourDayHomeWorkout } from './4dayHome';
import { fiveDayPPLWorkout } from './5dayPPL';
import { fiveDayHomeWorkout } from './5dayHome';
import { sixDayHomeWorkout } from './6dayHome';
import { sixDayGymWorkout } from './6dayGym';
import { sevenDayHomeWorkout } from './7dayHome';
import { sevenDayGymWorkout } from './7dayGym';

// Define types for user criteria
export type WorkoutCriteria = {
  goal: 'lose_weight' | 'gain_muscle' | 'maintain_fitness';
  workoutLocation: 'home' | 'gym';
  daysPerWeek?: number;
  activityLevel?: string;
  // Add more as needed
};

// Data-driven mapping for explicit program selection
const programRules = [
  // 2-day programs
  { goal: 'any', workoutLocation: 'home', daysPerWeek: 2, program: twoDayFullBodyWorkout },
  { goal: 'any', workoutLocation: 'gym', daysPerWeek: 2, program: twoDayGymWorkout },

  // 3-day splits
  { goal: 'lose_weight', workoutLocation: 'home', daysPerWeek: 3, program: threeDayHIITWorkout },
  { goal: 'gain_muscle', workoutLocation: 'home', daysPerWeek: 3, program: threeDayBodyweightWorkout },
  { goal: 'gain_muscle', workoutLocation: 'gym', daysPerWeek: 3, program: threeDayPPLWorkout },
  { goal: 'lose_weight', workoutLocation: 'gym', daysPerWeek: 3, program: threeDayFullBodyWorkout },
  { goal: 'maintain_fitness', workoutLocation: 'home', daysPerWeek: 3, program: threeDayBodyweightWorkout },
  { goal: 'maintain_fitness', workoutLocation: 'gym', daysPerWeek: 3, program: threeDayPPLWorkout },

  // 4-day programs
  { goal: 'any', workoutLocation: 'home', daysPerWeek: 4, program: fourDayHomeWorkout },
  { goal: 'any', workoutLocation: 'gym', daysPerWeek: 4, program: fourDayUpperLowerWorkout },

  // 5-day programs
  { goal: 'any', workoutLocation: 'home', daysPerWeek: 5, program: fiveDayHomeWorkout },
  { goal: 'any', workoutLocation: 'gym', daysPerWeek: 5, program: fiveDayPPLWorkout },
  
  // 6-day programs
  { goal: 'any', workoutLocation: 'home', daysPerWeek: 6, program: sixDayHomeWorkout },
  { goal: 'any', workoutLocation: 'gym', daysPerWeek: 6, program: sixDayGymWorkout },
  
  // 7-day programs
  { goal: 'any', workoutLocation: 'home', daysPerWeek: 7, program: sevenDayHomeWorkout },
  { goal: 'any', workoutLocation: 'gym', daysPerWeek: 7, program: sevenDayGymWorkout },
];

// Generate the explicit programMap
const programMap: Array<{ match: (criteria: WorkoutCriteria) => boolean; program: any }> = [
  ...programRules.map(({ goal, workoutLocation, daysPerWeek, program }) => ({
    match: (criteria: WorkoutCriteria) =>
      criteria.goal === goal &&
      criteria.workoutLocation === workoutLocation &&
      criteria.daysPerWeek === daysPerWeek,
    program
  })),
];

// Main function to select a program
export function selectWorkoutProgram(criteria: WorkoutCriteria) {
  // Fallback priorities: [goal, workoutLocation]
  const priorities: Array<[string, string]> = [
    [criteria.goal, criteria.workoutLocation],            // exact match
    ['any', criteria.workoutLocation],                    // any goal
    [criteria.goal, 'any'],                               // any location
    ['any', 'any'],                                       // any goal & location
  ];

  for (const [goal, workoutLocation] of priorities) {
    const found = programRules.find(rule =>
      rule.goal === goal &&
      rule.workoutLocation === workoutLocation &&
      rule.daysPerWeek === criteria.daysPerWeek
    );
    if (found) return found.program;
  }

  return undefined; // No match found in rules or fallbacks
}

// Export for dynamic import (if needed)
export const allPrograms = {
  threeDayBodyweightWorkout,
  threeDayFullBodyWorkout,
  threeDayHIITWorkout,
  threeDayPPLWorkout,
  twoDayFullBodyWorkout,
  twoDayGymWorkout,
  fourDayUpperLowerWorkout,
  fourDayHomeWorkout,
  fiveDayPPLWorkout,
  fiveDayHomeWorkout,
  sixDayHomeWorkout,
  sixDayGymWorkout,
  sevenDayHomeWorkout,
  sevenDayGymWorkout,
};
