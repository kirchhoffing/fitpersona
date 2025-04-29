import React from 'react';

interface WorkoutProgramDisplayProps {
  program: any;
  locale: string;
}

export const WorkoutProgramDisplay: React.FC<WorkoutProgramDisplayProps> = ({ program, locale }) => {
  if (!program) return null;

  return (
    <div className="mt-8 p-6 bg-gray-700 rounded-xl">
      <div className="text-xl font-bold text-green-300 mb-2">
        {program.name[locale] || program.name['en']}
      </div>
      <div className="text-gray-200 mb-4">
        {program.description[locale] || program.description['en']}
      </div>
      <div className="space-y-6">
        {program.days.map((day: any, i: number) => (
          <div key={i} className="border-b border-gray-600 pb-4 mb-4 last:border-b-0 last:mb-0">
            <div className="font-semibold text-blue-200 mb-2">{day.name[locale] || day.name['en']}</div>
            <ul className="list-disc list-inside mb-2">
              {day.exercises.map((ex: any, j: number) => (
                <li key={j} className="mb-1">
                  <span className="font-medium text-white">{ex.name[locale] || ex.name['en']}</span> - {ex.sets} sets x {ex.reps}
                  {ex.videoUrl && (
                    <a href={ex.videoUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-green-400 underline text-xs">Video</a>
                  )}
                </li>
              ))}
            </ul>
            {day.cardio && (
              <div className="text-xs text-gray-400">Cardio: {day.cardio[locale] || day.cardio['en']}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
