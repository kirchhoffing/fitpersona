import React, { useState } from 'react';

interface WorkoutProgramDisplayProps {
  program: any;
  locale: string;
}

export const WorkoutProgramDisplay: React.FC<WorkoutProgramDisplayProps> = ({ program, locale }) => {
  const [expandedDay, setExpandedDay] = useState<number | null>(0); // Default expand first day
  
  if (!program) return (
    <div className="mt-8 p-6 bg-gray-700 rounded-xl text-center">
      <div className="text-xl font-bold text-yellow-300 mb-4">No Workout Program Available</div>
      <p className="text-gray-300">Please complete your profile to get a personalized workout program.</p>
    </div>
  );

  const toggleDay = (index: number) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg border border-gray-600">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="text-2xl font-bold text-green-300">
          {program.name[locale] || program.name['en']}
        </div>
      </div>
      
      <div className="text-gray-200 mb-6 pl-4 border-l-2 border-green-400">
        {program.description[locale] || program.description['en']}
      </div>
      
      <div className="bg-gray-900 bg-opacity-40 p-3 rounded-lg mb-6">
        <div className="text-sm text-gray-300 mb-2">Program Overview:</div>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-blue-900 bg-opacity-50 rounded-full text-blue-200 text-sm">
            {program.days.length} Days/Week
          </span>
          <span className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-purple-200 text-sm">
            {program.days.reduce((total: number, day: any) => total + day.exercises.length, 0)} Exercises
          </span>
          <span className="px-3 py-1 bg-green-900 bg-opacity-50 rounded-full text-green-200 text-sm">
            {program.days.some((day: any) => day.cardio) ? 'Includes Cardio' : 'No Cardio'}
          </span>
        </div>
      </div>
      
      <div className="space-y-4">
        {program.days.map((day: any, i: number) => (
          <div key={i} className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-200">
            <div 
              className={`flex justify-between items-center p-4 cursor-pointer ${expandedDay === i ? 'bg-blue-900 bg-opacity-30' : 'hover:bg-gray-700'}`}
              onClick={() => toggleDay(i)}
            >
              <div className="font-semibold text-blue-200">{day.name[locale] || day.name['en']}</div>
              <div className="text-gray-400 text-sm">{day.exercises.length} exercises</div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${expandedDay === i ? 'transform rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {expandedDay === i && (
              <div className="p-4 bg-gray-800 border-t border-gray-700">
                <ul className="space-y-4 mb-4">
                  {day.exercises.map((ex: any, j: number) => (
                    <li key={j} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs text-white">{j+1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white text-base mb-1">
                          {typeof ex.name === 'string' ? ex.name : (ex.name[locale] || ex.name['en'])}
                        </div>
                        <div className="text-gray-300 text-sm">{ex.sets} sets × {ex.reps} reps</div>
                        {ex.notes && (
                          <div className="text-gray-400 text-xs mt-1">{ex.notes[locale] || ex.notes['en']}</div>
                        )}
                        {ex.videoUrl && (
                          <a 
                            href={ex.videoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center mt-2 text-green-400 hover:text-green-300 text-xs"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Watch Exercise Video
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                {day.cardio && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center text-orange-300 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-medium">Cardio</span>
                    </div>
                    <div className="text-gray-300 text-sm pl-7">{day.cardio[locale] || day.cardio['en']}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button 
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
          onClick={() => window.print()}
        >
          Print Workout Program
        </button>
      </div>
    </div>
  );
};
