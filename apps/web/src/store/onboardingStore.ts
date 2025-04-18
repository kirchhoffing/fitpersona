import { create } from 'zustand'
import { type StateCreator } from 'zustand'

// Form state types
export type Gender = 'male' | 'female' | 'other'
export type Goal = 'lose_weight' | 'gain_muscle' | 'maintain_fitness'
export type ActivityLevel = 'sedentary' | 'lightly_active' | 'active' | 'very_active'
export type Equipment = 'body_weight' | 'home_equipment' | 'gym'

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
  dietaryPreferences: string | null
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
  setDietaryPreferences: (preferences: string) => void
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
  currentStep: 1,
  totalSteps: 8,
}

type OnboardingStore = StateCreator<OnboardingFormState>

export const useOnboardingStore = create<OnboardingFormState>((set) => ({
  ...initialState,
  setGender: (gender: Gender) => set({ gender }),
  setAge: (age: number | null) => set({ age }),
  setHeight: (height: number | null) => set({ height }),
  setWeight: (weight: number | null) => set({ weight }),
  setGoal: (goal: Goal) => set({ goal }),
  setActivityLevel: (level: ActivityLevel) => set({ activityLevel: level }),
  setWorkoutLocation: (location: Equipment | null) => set({ workoutLocation: location }),
  setAvailableEquipment: (equipment: string[] | null) => set({ availableEquipment: equipment }),
  setDietaryPreferences: (preferences: string) => set({ dietaryPreferences: preferences }),
  nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, state.totalSteps) })),
  prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
  resetForm: () => set(initialState),
})) 