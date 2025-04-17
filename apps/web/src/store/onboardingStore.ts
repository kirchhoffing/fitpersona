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
  // Step 2
  birthYear: number | null
  // Step 3
  height: number | null
  // Step 4
  weight: number | null
  // Step 5
  goal: Goal | null
  // Step 6
  activityLevel: ActivityLevel | null
  // Step 7
  equipment: Equipment | null
  // Step 8
  dietaryPreferences: string
  // Navigation
  currentStep: number
  totalSteps: number
  // Actions
  setGender: (gender: Gender) => void
  setBirthYear: (year: number) => void
  setHeight: (height: number) => void
  setWeight: (weight: number) => void
  setGoal: (goal: Goal) => void
  setActivityLevel: (level: ActivityLevel) => void
  setEquipment: (equipment: Equipment) => void
  setDietaryPreferences: (preferences: string) => void
  nextStep: () => void
  prevStep: () => void
  resetForm: () => void
}

const initialState = {
  gender: null,
  birthYear: null,
  height: null,
  weight: null,
  goal: null,
  activityLevel: null,
  equipment: null,
  dietaryPreferences: '',
  currentStep: 1,
  totalSteps: 8,
}

type OnboardingStore = StateCreator<OnboardingFormState>

export const useOnboardingStore = create<OnboardingFormState>((set) => ({
  ...initialState,
  setGender: (gender: Gender) => set({ gender }),
  setBirthYear: (year: number) => set({ birthYear: year }),
  setHeight: (height: number) => set({ height }),
  setWeight: (weight: number) => set({ weight }),
  setGoal: (goal: Goal) => set({ goal }),
  setActivityLevel: (level: ActivityLevel) => set({ activityLevel: level }),
  setEquipment: (equipment: Equipment) => set({ equipment }),
  setDietaryPreferences: (preferences: string) => set({ dietaryPreferences: preferences }),
  nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, state.totalSteps) })),
  prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
  resetForm: () => set(initialState),
})) 