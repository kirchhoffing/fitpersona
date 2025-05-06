import { z } from 'zod'

// Current year for age validation
const currentYear = new Date().getFullYear()

export const onboardingSchema = z.object({
  // Step 1: Gender
  gender: z.enum(['male', 'female', 'other'] as const, {
    required_error: 'Lütfen cinsiyetinizi seçin',
  }),

  // Step 2: Age
  age: z.number()
    .min(13, 'Geçerli bir yaş girin')
    .max(120, 'Geçerli bir yaş girin'),

  // Step 3: Height
  height: z.number()
    .min(100, 'Boy 100cm\'den kısa olamaz')
    .max(250, 'Boy 250cm\'den uzun olamaz'),

  // Step 4: Weight
  weight: z.number()
    .min(30, 'Kilo 30kg\'dan az olamaz')
    .max(300, 'Kilo 300kg\'dan fazla olamaz'),

  // Step 5: Goal
  goal: z.enum(['lose_weight', 'gain_muscle', 'maintain_fitness'] as const, {
    required_error: 'Lütfen bir hedef seçin',
  }),

  // Step 6: Activity Level
  activityLevel: z.enum(['sedentary', 'lightly_active', 'active', 'very_active'] as const, {
    required_error: 'Lütfen aktivite düzeyinizi seçin',
  }),

  // Step 7: Workout Location
  workoutLocation: z.enum(['home', 'gym'] as const, {
    required_error: 'Lütfen ekipman durumunuzu seçin',
  }),

  // Step 8: Fitness Level
  fitnessLevel: z.enum(['beginner', 'intermediate', 'advanced'] as const, {
    required_error: 'Lütfen fitness seviyenizi seçin',
  }),

  // Step 9: Dietary Preferences (optional)
  dietaryPreferences: z.array(z.string()).optional(),

  // Step 10: Days per week for workouts
  daysPerWeek: z.number()
    .min(1, 'Günde en az 1 gün egzersiz yapabilirsiniz')
    .max(7, 'Haftada en fazla 7 gün egzersiz yapabilirsiniz'),
})

// Type for the form data
export type OnboardingFormData = z.infer<typeof onboardingSchema>

// Individual step schemas for step-by-step validation
export const stepSchemas = {
  1: z.object({
    gender: z.enum(['male', 'female', 'other']),
  }),
  2: z.object({
    age: z.number().min(13).max(120),
  }),
  3: z.object({
    height: z.number().min(100).max(250),
  }),
  4: z.object({
    weight: z.number().min(30).max(300),
  }),
  5: z.object({
    goal: z.enum(['lose_weight', 'gain_muscle', 'maintain_fitness']),
  }),
  6: z.object({
    activityLevel: z.enum(['sedentary', 'lightly_active', 'active', 'very_active']),
  }),
  7: z.object({
    workoutLocation: z.enum(['home', 'gym']),
  }),
  8: z.object({
    fitnessLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  }),
  9: z.object({
    dietaryPreferences: z.array(z.string()).optional(),
  }),
  10: z.object({
    daysPerWeek: z.number().min(1).max(7),
  }),
}