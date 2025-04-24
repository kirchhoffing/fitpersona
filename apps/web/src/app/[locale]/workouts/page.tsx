/*
  Workouts Page (UI Route)
  Purpose: Renders the workouts page for the current locale, displaying workout program details to the user.
  Context: This is a Next.js route component, part of the FitPersona web app, that imports workout data from lib/workouts and displays it in the UI.
*/

import { WorkoutProgram } from '@/components/workouts/WorkoutProgram';
import { workoutPrograms } from '@/lib/workouts/workout-programs';

export default function WorkoutsPage() {
  return (
    <div className="container mx-auto py-8">
      <WorkoutProgram program={workoutPrograms['3day-full-body']} />
    </div>
  );
} 