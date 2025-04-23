'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WorkoutProgram as WorkoutProgramType, Locale } from '@/types/exercise';

interface WorkoutProgramProps {
  program: WorkoutProgramType;
}

export function WorkoutProgram({ program }: WorkoutProgramProps) {
  const t = useTranslations('WorkoutProgram');
  const currentLocale = useLocale() as Locale;

  return (
    <div className="space-y-8" key={`workout-program-${currentLocale}`}>
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">{program.name[currentLocale]}</h1>
        <p className="text-muted-foreground">{program.description[currentLocale]}</p>
      </div>

      <div className="space-y-6">
        {program.days.map((day, dayIndex) => (
          <Card key={dayIndex}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">{day.name[currentLocale]}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {day.exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex} className="border border-gray-800 rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{exercise.name}</h3>
                        <div className="flex gap-1">
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {exercise.description[currentLocale]}
                    </p>
                    {exercise.videoUrl && (
                      <a 
                        href={exercise.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-blue-400 hover:underline mt-1 block"
                      >
                        {t('watchVideo')}
                      </a>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-sm font-medium text-muted-foreground">
                  {t('cardio')}: {day.cardio[currentLocale]}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 