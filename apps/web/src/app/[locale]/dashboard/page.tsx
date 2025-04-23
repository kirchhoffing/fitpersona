"use client";
import { useLocale, useTranslations } from 'next-intl'
import { useOnboardingStore } from '@/store/onboardingStore'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { WorkoutProgram } from '@/components/workouts/WorkoutProgram'
import { workoutPrograms } from '@/lib/workouts/workout-programs'
import { Goal, ActivityLevel, Equipment, Gender } from '@/store/onboardingStore'

export default function DashboardPage() {
  const locale = useLocale()
  const t = useTranslations('dashboard')
  const tOnboarding = useTranslations('onboarding.steps')
  const {
    gender,
    age,
    height,
    weight,
    goal,
    activityLevel,
    workoutLocation,
    availableEquipment,
    dietaryPreferences,
    resetForm,
    setGender,
    setAge,
    setHeight,
    setWeight,
    setGoal,
    setActivityLevel,
    setWorkoutLocation,
    setDietaryPreferences,
  } = useOnboardingStore()

  const program = workoutPrograms['3day-full-body']
  
  // State for editing mode
  const [isEditing, setIsEditing] = useState(false)
  const [editValues, setEditValues] = useState({
    gender: gender as Gender || 'male',
    age: age?.toString() || '',
    height: height?.toString() || '',
    weight: weight?.toString() || '',
    goal: goal as Goal || 'lose_weight',
    activityLevel: activityLevel as ActivityLevel || 'sedentary',
    workoutLocation: workoutLocation as Equipment || 'body_weight',
    dietaryPreferences: dietaryPreferences || '',
  })

  const onUpdate = () => {
    if (isEditing) {
      // Save changes
      setGender(editValues.gender as Gender)
      setAge(editValues.age ? Number(editValues.age) : null)
      setHeight(editValues.height ? Number(editValues.height) : null)
      setWeight(editValues.weight ? Number(editValues.weight) : null)
      setGoal(editValues.goal as Goal)
      setActivityLevel(editValues.activityLevel as ActivityLevel)
      setWorkoutLocation(editValues.workoutLocation as Equipment)
      setDietaryPreferences(editValues.dietaryPreferences)
      
      setIsEditing(false)
    } else {
      // Enter edit mode
      setIsEditing(true)
    }
  }

  const onReset = () => {
    if (isEditing) {
      // Cancel editing
      setEditValues({
        gender: gender as Gender || 'male',
        age: age?.toString() || '',
        height: height?.toString() || '',
        weight: weight?.toString() || '',
        goal: goal as Goal || 'lose_weight',
        activityLevel: activityLevel as ActivityLevel || 'sedentary',
        workoutLocation: workoutLocation as Equipment || 'body_weight',
        dietaryPreferences: dietaryPreferences || '',
      })
      setIsEditing(false)
    } else {
      // Reset all data
      resetForm()
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow p-6 space-y-6">
        <h1 className="text-4xl text-white font-bold">{t('title')}</h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
            <div className="space-y-3 text-gray-300">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('gender')}</span>
                {isEditing ? (
                  <select 
                    value={editValues.gender} 
                    onChange={(e) => setEditValues({...editValues, gender: e.target.value as Gender})}
                    className="bg-gray-700 text-white p-2 rounded"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {tOnboarding(`gender.${gender}`)}
                  </span>
                )}
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('age')}</span>
                {isEditing ? (
                  <input 
                    type="number" 
                    value={editValues.age} 
                    onChange={(e) => setEditValues({...editValues, age: e.target.value})}
                    className="bg-gray-700 text-white p-2 rounded"
                  />
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>{age}</span>
                )}
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('height')}</span>
                {isEditing ? (
                  <div className="flex items-center">
                    <input 
                      type="number" 
                      value={editValues.height} 
                      onChange={(e) => setEditValues({...editValues, height: e.target.value})}
                      className="bg-gray-700 text-white p-2 rounded"
                    />
                    <span className="ml-2">cm</span>
                  </div>
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>{height} cm</span>
                )}
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('weight')}</span>
                {isEditing ? (
                  <div className="flex items-center">
                    <input 
                      type="number" 
                      value={editValues.weight} 
                      onChange={(e) => setEditValues({...editValues, weight: e.target.value})}
                      className="bg-gray-700 text-white p-2 rounded"
                    />
                    <span className="ml-2">kg</span>
                  </div>
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>{weight} kg</span>
                )}
              </div>
            </div>
            
            <div className="space-y-3 text-gray-300">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('goal')}</span>
                {isEditing ? (
                  <select 
                    value={editValues.goal} 
                    onChange={(e) => setEditValues({...editValues, goal: e.target.value as Goal})}
                    className="bg-gray-700 text-white p-2 rounded"
                  >
                    <option value="lose_weight">Lose Weight</option>
                    <option value="gain_muscle">Gain Muscle</option>
                    <option value="maintain_fitness">Maintain Fitness</option>
                  </select>
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {goal ? tOnboarding(`goal.${goal}.title`) : 'N/A'}
                  </span>
                )}
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('activityLevel')}</span>
                {isEditing ? (
                  <select 
                    value={editValues.activityLevel} 
                    onChange={(e) => setEditValues({...editValues, activityLevel: e.target.value as ActivityLevel})}
                    className="bg-gray-700 text-white p-2 rounded"
                  >
                    <option value="sedentary">Sedentary</option>
                    <option value="lightly_active">Lightly Active</option>
                    <option value="active">Active</option>
                    <option value="very_active">Very Active</option>
                  </select>
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {activityLevel ? tOnboarding(`activityLevel.${activityLevel}`) : 'N/A'}
                  </span>
                )}
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('workoutLocation')}</span>
                {isEditing ? (
                  <select 
                    value={editValues.workoutLocation} 
                    onChange={(e) => setEditValues({...editValues, workoutLocation: e.target.value as Equipment})}
                    className="bg-gray-700 text-white p-2 rounded"
                  >
                    <option value="body_weight">Body Weight</option>
                    <option value="home_equipment">Home Equipment</option>
                    <option value="gym">Gym</option>
                  </select>
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {workoutLocation ? tOnboarding(`equipment.${workoutLocation}`) : 'N/A'}
                  </span>
                )}
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('dietaryPreferences')}</span>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={editValues.dietaryPreferences} 
                    onChange={(e) => setEditValues({...editValues, dietaryPreferences: e.target.value})}
                    className="bg-gray-700 text-white p-2 rounded"
                  />
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {dietaryPreferences ? 
                      dietaryPreferences.split(',').map(pref => 
                        tOnboarding(`health.${pref}`)).join(', ') 
                      : t('none')}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2 mt-4 md:mt-0">
            <Button 
              variant={isEditing ? "default" : "outline"} 
              onClick={onUpdate}
              className="w-32"
            >
              {isEditing ? t('update') : t('edit')}
            </Button>
            <Button 
              variant="destructive" 
              onClick={onReset}
              className="w-32"
            >
              {isEditing ? t('cancel') : t('reset')}
            </Button>
          </div>
        </div>
        
        <WorkoutProgram program={program} />
      </div>
    </div>
  )
}
