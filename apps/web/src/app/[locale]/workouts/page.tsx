import { WorkoutProgram } from '@/components/workouts/WorkoutProgram';
import { workoutPrograms } from '@/lib/workouts/workout-programs';

export default function WorkoutsPage() {
  return (
    <div className="container mx-auto py-8">
      <WorkoutProgram program={workoutPrograms['3day-full-body']} />
    </div>
  );
} 