import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type StateCreator } from 'zustand'

// Form state types
export type Gender = 'male' | 'female' | 'other'
export type Goal = 'lose_weight' | 'gain_muscle' | 'maintain_fitness'
export type ActivityLevel = 'sedentary' | 'lightly_active' | 'active' | 'very_active'
export type Equipment = 'home_equipment' | 'gym'

interface OnboardingFormState {
  // Step 1
  gender: Gender | null
  age: number | null
  // Step 3
  height: number | null
  // Step 4
  weight: number | null
  // Step 5
  goal: Goal | null
  // Step 6
  activityLevel: ActivityLevel | null
  // Step 7
  workoutLocation: Equipment | null
  // Step 8
  availableEquipment: string[] | null
  dietaryPreferences: string[] | null
  // Step 9
  daysPerWeek: number | null
  // Navigation
  currentStep: number
  totalSteps: number
  // Actions
  setGender: (gender: Gender) => void
  setAge: (age: number | null) => void
  setHeight: (height: number | null) => void
  setWeight: (weight: number | null) => void
  setGoal: (goal: Goal) => void
  setActivityLevel: (level: ActivityLevel) => void
  setWorkoutLocation: (location: Equipment | null) => void
  setAvailableEquipment: (equipment: string[] | null) => void
  setDietaryPreferences: (preferences: string[]) => void
  setDaysPerWeek: (days: number) => void
  nextStep: () => void
  prevStep: () => void
  resetForm: () => void
}

const initialState = {
  gender: null,
  age: null,
  height: null,
  weight: null,
  goal: null,
  activityLevel: null,
  workoutLocation: null,
  availableEquipment: null,
  dietaryPreferences: null,
  daysPerWeek: null,
  currentStep: 1,
  totalSteps: 9,
}

type OnboardingStore = StateCreator<OnboardingFormState>

export const useOnboardingStore = create(
  persist<OnboardingFormState>(
    (set) => ({
      ...initialState,
      setGender: (gender: Gender) => set((state) => ({ ...state, gender })),
      setAge: (age: number | null) => set((state) => ({ ...state, age })),
      setHeight: (height: number | null) => set((state) => ({ ...state, height })),
      setWeight: (weight: number | null) => set((state) => ({ ...state, weight })),
      setGoal: (goal: Goal) => set((state) => ({ ...state, goal })),
      setActivityLevel: (level: ActivityLevel) => set((state) => ({ ...state, activityLevel: level })),
      setWorkoutLocation: (location: Equipment | null) => set((state) => ({ ...state, workoutLocation: location })),
      setAvailableEquipment: (equipment: string[] | null) => set((state) => ({ ...state, availableEquipment: equipment })),
      setDietaryPreferences: (preferences: string[]) => set((state) => ({ ...state, dietaryPreferences: preferences })),
      setDaysPerWeek: (days: number) => set((state) => ({ ...state, daysPerWeek: days })),
      nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, state.totalSteps) })),
      prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
      resetForm: () => set(initialState),
    }),
    {
      name: 'onboarding-storage', // key in localStorage
      partialize: (state) => ({
        gender: state.gender,
        age: state.age,
        height: state.height,
        weight: state.weight,
        goal: state.goal,
        activityLevel: state.activityLevel,
        workoutLocation: state.workoutLocation,
        availableEquipment: state.availableEquipment,
        dietaryPreferences: state.dietaryPreferences,
        daysPerWeek: state.daysPerWeek,
        currentStep: state.currentStep,
        totalSteps: state.totalSteps,
      } as unknown as OnboardingFormState),
    }
  )
)