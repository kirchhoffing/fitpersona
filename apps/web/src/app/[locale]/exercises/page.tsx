/*
  Exercises Page
  Purpose: Displays a searchable and filterable grid of exercises for the user, localized by language/locale. Allows users to browse and search exercises and see details such as muscle groups and images.
  Context: Part of the FitPersona web app, this page is used in the onboarding flow and general exercise exploration. Uses Next.js, next-intl for i18n, and pulls exercise data from the shared package.
*/

"use client";
import { useTranslations, useLocale } from 'next-intl';
import { exerciseDatabase } from '@/lib/workouts/exercise-data';
import { MuscleGroup } from '@fitpersona/exercises';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ExercisesPage() {
  const locale = useLocale();
  const t = useTranslations();
  const tOnboarding = useTranslations('onboarding.steps');
  const [filter, setFilter] = useState('');
  
  // Convert exercise database to array for easier filtering
  const exercises = Object.values(exerciseDatabase);
  
  // Filter exercises based on search input
  const filteredExercises = exercises.filter(exercise => 
    exercise.name.toLowerCase().includes(filter.toLowerCase()) ||
    exercise.muscleGroups?.some((muscle: MuscleGroup) => muscle.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow p-6 space-y-6">
        <h1 className="text-4xl text-white font-bold">{t('labels.exercisesTitle')}</h1>
        
        {/* Search filter */}
        <div className="relative">
          <input
            type="text"
            placeholder={t('labels.searchPlaceholder')}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Exercise grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise) => (
            <div key={exercise.id} className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {exercise.imageUrl && (
                <div className="relative h-72 w-full">
                  <Image
                    src={exercise.imageUrl}
                    alt={exercise.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="p-5 space-y-4">
                <h3 className="text-xl text-white font-semibold">{exercise.name}</h3>
                
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">{t('labels.targetArea')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {exercise.muscleGroups?.map((muscle: MuscleGroup) => {
                      // List of generic muscle group keys for translation
                      const genericMuscles = [
                        'back', 'chest', 'shoulders', 'legs', 'core', 'abdominals', 'obliques', 'glutes', 'calves'
                      ];
                      const isGeneric = genericMuscles.includes(muscle);
                      return (
                        <span
                          key={muscle}
                          className="px-2 py-1 bg-blue-900 text-blue-100 text-xs rounded-full"
                        >
                          {t(`muscle.${muscle}`)}
                        </span>
                      );
                    })}
                  </div>
                </div>
                
                {exercise.healthRisks && exercise.healthRisks.length > 0 && (
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">{t('labels.riskConditions')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {exercise.healthRisks.map((risk: string) => (
                        <span
                          key={risk}
                          className="px-2 py-1 bg-red-900 text-red-100 text-xs rounded-full"
                        >
                          {tOnboarding(`health.${risk}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-4">
                  
                  
                  {exercise.videoUrl && (
                    <Link 
                      href={exercise.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                    >
                      <span>{t('WorkoutProgram.watchVideo')}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredExercises.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-400">No exercises found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
