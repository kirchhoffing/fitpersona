type Gender = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';
type Goal = 'maintain' | 'lose' | 'gain';

const activityMultiplier: Record<ActivityLevel, number> = {
  sedentary: 1.2,       // little or no exercise
  light: 1.375,          // light exercise/sports 1–3 days/week
  moderate: 1.55,        // moderate exercise/sports 3–5 days/week
  active: 1.725,         // hard exercise/sports 6–7 days a week
  veryActive: 1.9        // very hard exercise, physical job, or 2x training
};

export function calculateCalories({
  gender,
  age,
  weightKg,
  heightCm,
  activityLevel,
  goal
}: {
  gender: Gender;
  age: number;
  weightKg: number;
  heightCm: number;
  activityLevel: ActivityLevel;
  goal: Goal;
}) {
  // 1. BMR hesapla (Mifflin-St Jeor)
  const bmr =
    gender === 'male'
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  // 2. Aktivite seviyesine göre TDEE hesapla
  const tdee = bmr * activityMultiplier[activityLevel];

  // 3. Hedefe göre günlük kalori belirle
  let targetCalories = tdee;
  if (goal === 'lose') targetCalories -= 500;
  if (goal === 'gain') targetCalories += 500;

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    targetCalories: Math.round(targetCalories)
  };
}
