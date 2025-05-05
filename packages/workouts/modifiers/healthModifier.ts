import { WorkoutProgram, Day } from '../workoutProgramMap';
import { exerciseDatabase } from '@fitpersona/exercises';
import { Exercise } from '@fitpersona/exercises';

/**
 * Modifies a workout program based on user health risks.
 * 
 * This function creates a health-aware version of a workout program by:
 * 1. Analyzing each exercise for potential health risks
 * 2. Replacing risky exercises with safer alternatives when the user's health risks overlap
 * 3. Finding appropriate beginner-level alternatives with similar muscle targets
 * 
 * @param program - The original workout program
 * @param userRisks - Array of user health risks (e.g., ['back_pain', 'knee_problem'])
 * @returns A modified workout program with safer exercise alternatives
 */
export function modifyWorkoutForHealth(
  program: WorkoutProgram | any, // Allow any to handle implementation differences
  userRisks: string[]
): WorkoutProgram | any {
  // Create deep copy to avoid mutating the original program
  const modifiedProgram: WorkoutProgram = JSON.parse(JSON.stringify(program));
  
  // Process each day in the program
  modifiedProgram.days = modifiedProgram.days.map((day: Day) => {
    // Process each exercise in the day
    day.exercises = day.exercises.map((exerciseInstance: Exercise) => {
      // Find the full exercise details from the database using the exercise name
      const exerciseName = exerciseInstance.name;
      let exerciseId = '';
      
      // Find the exercise ID by matching the name
      for (const [id, exercise] of Object.entries(exerciseDatabase)) {
        if (exercise.name === exerciseName) {
          exerciseId = id;
          break;
        }
      }
      
      // If we couldn't find the exercise or it has no risks, keep it as is
      if (!exerciseId || !exerciseDatabase[exerciseId].healthRisks) {
        return exerciseInstance;
      }
      
      const exercise = exerciseDatabase[exerciseId];
      const exerciseRisks = exercise.healthRisks || [];
      
      // Check if any of the exercise risks overlap with user risks
      const hasRiskOverlap = exerciseRisks.some(risk => userRisks.includes(risk));
      
      // If there's no risk overlap, keep the original exercise
      if (!hasRiskOverlap) {
        return exerciseInstance;
      }
      
      // Try to find a suitable alternative
      const alternativeId = findSuitableAlternative(exerciseId, userRisks);
      
      // If no alternative found, keep the original
      if (!alternativeId) {
        return exerciseInstance;
      }
      
      // Create a modified exercise with the alternative
      const alternativeExercise = exerciseDatabase[alternativeId];
      const modifiedExercise = {
        ...exerciseInstance,
        name: alternativeExercise.name,
        description: alternativeExercise.description,
        videoUrl: alternativeExercise.videoUrl,
        note: 'Replaced due to health risk'
      };
      
      return modifiedExercise;
    });
    
    return day;
  });
  
  return modifiedProgram;
}

/**
 * Finds a suitable alternative exercise that doesn't conflict with user health risks.
 * 
 * The function uses the following strategy to select an alternative:
 * 1. First tries the manually defined alternatives in the exercise database
 * 2. If no suitable manual alternative, looks for any beginner exercise targeting similar muscles
 * 
 * @param exerciseId - ID of the exercise to find an alternative for
 * @param userRisks - Array of user health risks
 * @returns ID of an alternative exercise, or undefined if none found
 */
function findSuitableAlternative(
  exerciseId: string,
  userRisks: string[]
): string | undefined {
  const exercise = exerciseDatabase[exerciseId];
  
  // Step 1: Try exercise-specific alternatives if defined
  if (exercise.alternatives && exercise.alternatives.length > 0) {
    // Look for the first alternative without risk overlap
    for (const altId of exercise.alternatives) {
      const altExercise = exerciseDatabase[altId];
      const altRisks = altExercise.healthRisks || [];
      
      // Check if this alternative is safe for the user
      const hasRiskOverlap = altRisks.some(risk => userRisks.includes(risk));
      
      if (!hasRiskOverlap) {
        return altId;
      }
    }
  }
  
  // Step 2: If no suitable alternatives found, look for any beginner exercise
  // that shares at least one muscle group with the original exercise
  const targetMuscleGroups = exercise.muscleGroups || [];
  
  for (const [id, candidateExercise] of Object.entries(exerciseDatabase)) {
    // Skip the original exercise and non-beginner exercises
    if (id === exerciseId || candidateExercise.difficulty !== 'beginner') {
      continue;
    }
    
    const candidateRisks = candidateExercise.healthRisks || [];
    const candidateMuscles = candidateExercise.muscleGroups || [];
    
    // Check if the candidate has any overlapping health risks
    const hasRiskOverlap = candidateRisks.some(risk => userRisks.includes(risk));
    
    // Skip if there are overlapping risks
    if (hasRiskOverlap) {
      continue;
    }
    
    // Check if the candidate targets at least one of the same muscle groups
    const hasMuscleOverlap = candidateMuscles.some(muscle => 
      targetMuscleGroups.includes(muscle)
    );
    
    if (hasMuscleOverlap) {
      return id;
    }
  }
  
  // If we get here, no suitable alternative was found
  return undefined;
}
