"use client";
import { calculateCalories } from "@/nutrition/calorie-calculation";
import { useMemo } from "react";
import { useTranslations } from 'next-intl';

export interface CalorieDisplayProps {
  gender: "male" | "female";
  age: number;
  height: number;
  weight: number;
  activityLevel: string;
  goal: string;
}

export function CalorieDisplay({ gender, age, height, weight, activityLevel, goal }: CalorieDisplayProps) {
  const t = useTranslations('dashboard');
  // Map UI values to calculation values
  const mappedGoal = goal === "gain_muscle" ? "gain" : goal === "lose_weight" ? "lose" : "maintain";
  let mappedActivity = "sedentary";
  if (activityLevel === "lightly_active") mappedActivity = "light";
  else if (activityLevel === "active") mappedActivity = "moderate";
  else if (activityLevel === "very_active") mappedActivity = "active";

  const calories = useMemo(() => {
    if (!gender || !age || !height || !weight || !activityLevel || !goal) return null;
    try {
      return calculateCalories({
        gender,
        age,
        heightCm: height,
        weightKg: weight,
        activityLevel: mappedActivity as any,
        goal: mappedGoal as any,
      });
    } catch {
      return null;
    }
  }, [gender, age, height, weight, activityLevel, goal]);

  if (!calories) return null;
  return (
    <div className="mt-8 text-center">
      <div className="text-lg text-gray-300 font-semibold">{t('calorie.title')}</div>
      <div className="text-3xl font-bold text-green-400">{calories.targetCalories} kcal</div>
      <div className="text-xs text-gray-500 mt-1">{t('calorie.subtitle')}</div>
    </div>
  );
}
