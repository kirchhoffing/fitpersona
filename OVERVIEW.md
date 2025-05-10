# 🏋️‍♂️ FitPersona - Development Context Overview

This document summarizes the **current scope, tech stack, features, and folder structure** of the FitPersona project. It is intended to provide context continuity for AI tools like Cursor or ChatGPT when working on the codebase.

---

## 🔧 Project Summary

FitPersona is a full-stack TypeScript application designed to create **personalized fitness and nutrition plans**. It collects user preferences, physical metrics, and goals to generate individualized recommendations. The application specializes in adapting workout programs to accommodate user injuries and limitations, ensuring safe and effective exercise routines.

Monorepo architecture is used for better modularization, scalability, and team collaboration.

---

## 🚀 Tech Stack

* **Frontend**: Next.js 14 (App Router), React 18, Tailwind CSS, TypeScript, TanStack Query
* **Backend**: Express + TypeScript (ts-node + esbuild), Zod for validation
* **Database**: PostgreSQL (via Docker), Prisma ORM
* **Authentication**: Custom email/password (bcryptjs, SSR-safe, no native bindings)
* **Deployment**: Vercel (frontend + API routes), Supabase or Railway (PostgreSQL hosting)
* **Package Manager**: pnpm
* **Internationalization**: next-intl (multi-language support)
* **Development Tools**: Docker, ESLint, Prettier, TypeScript
* **Testing**: Jest, React Testing Library (planned)

---

## 🛠️ Features & Architecture

### 🧑‍💼 User Profile & Authentication

* Email/password registration and login (bcryptjs, SSR compatible)
* Registration form collects **name** field, shown in the global layout after login
* Multi-step onboarding form with state persistence
* Type-safe Zod validation for all user inputs
* Secure session-based authentication
* User preferences and settings management
* If a user completes onboarding and reaches the dashboard once, this state is tracked in `apps/web/src/app/api/user/onboarding-status/route.ts`. On subsequent logins, the homepage button changes from **Get Started** to **Dashboard**, avoiding redundant onboarding.

---

### ⎦ Onboarding & Step System

* Modular multi-step onboarding flow: profile, preferences, goals
* Workout location options simplified to "Home" and "Gym"
* Order of workout days and dietary steps updated for better UX
* Days per week now selected via buttons (1–7), not input
* All step logic is centralized and fully localized (JSON keys)
* Onboarding state is resumable
* Health/risk factors and user strings sourced from i18n files
* Dashboard layout simplified: profile info → calorie display → workout program (no duplicate calorie estimate)

### 🧬 Database Schema

**Profile Model**:

```prisma
model Profile {
  id            String   @id @default(cuid())
  userId        String   @unique
  email         String   @unique
  gender        String?
  birthYear     Int?
  height        Float?
  weight        Float?
  goal          String?
  activityLevel String?
  equipment     String[]
  dietary       String[]
  preferences   Json?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  user          User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

**User Model**:

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  workouts  Workout[]
  profile   Profile?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

**Exercise Database**:

* Centralized in `packages/exercises/src/exercise-data.ts`
* Exercises referenced in programs must exist as distinct entries
* Ensure `MuscleGroup` types in `exercises/src/types.ts` and `web/src/types/exercise.ts` stay in sync

### Workout Programs

* Includes Full Body, PPL, HIIT, and Bodyweight Home templates
* Each exercise is distinct (e.g., Pull-up ≠ Lat Pulldown)
* Added missing exercises like incline-bench-press, leg-press, calf-raise, etc.
* Fixed exercise category bugs (e.g., cobra-stretch to 'core')
* Exercises and programs are fully localized (JSON)
* Programs assigned based on onboarding + centralized logic
* Progress tracking and exercise history available
* Exercises can include `alternatives: string[]` for health-aware auto-replacement
* Replacement algorithm prioritizes safe alternatives for same muscle group (see `modifiers/README.md`)
* Add new programs via `workoutProgramMap.ts` and `programRules[]`, with fallback via `any` wildcards
* No hardcoded rules for multi-day splits—handled via clean, data-driven logic

### 🩹 Injury Adaptation System

* **Data Collection**: During onboarding, users are asked about health conditions and injuries through a dedicated step
* **Storage**: Injury data is stored in the Profile model under the `preferences` JSON field as an array of condition identifiers
* **Adaptation Logic**:
  * Each exercise in the database includes a `riskyFor` array listing conditions that make it potentially unsafe
  * When generating workout programs, the system cross-references user conditions with exercise risk factors
  * Risky exercises are automatically replaced with safe alternatives targeting the same muscle groups
  * Alternatives are specified in each exercise's `alternatives` array and prioritized by muscle group match
* **Fallback Behavior**:
  * If no direct alternative exists for a risky exercise, the system searches for any safe exercise targeting the same primary muscle group
  * For conflicting conditions (e.g., contradictory limitations), the system prioritizes safety by implementing all restrictions
  * If no suitable alternative can be found, the exercise is omitted with a notification to the user
* **Implementation**: The exercise replacement algorithm is implemented in `apps/web/src/lib/workouts/modifiers/health-aware-replacer.ts`

---

### 🏋️‍♂️ Exercises Page

* Multilingual searchable/filterable exercise list (names, groups, risks)
* All strings are fully localized (no hardcoded labels)
* Tailwind-styled, locale-aware navigation

### 🥗 Nutrition Features

* Personalized meal plans from user goal + preferences
* Localized dietary restriction support
* Calorie/macro tracking, meal suggestions

---

## 🌍 Internationalization

* Translation keys in `apps/web/src/messages/{locale}.json`
* Routing via `app/[locale]/`
* JSON issues (e.g., invalid commas) fixed
* Workout location keys simplified: `home` and `gym`
* Button-based day selection fully localized
* Missing keys added during runtime for consistency
* Languages supported: English (default), Turkish, German
* Locale-aware UI: language switcher, date/number formats, fallback handling

---

## 📁 Folder Structure

```plaintext
fitpersona/
├── apps/
│   ├── web/
│   │   ├── public/flags/
│   │   ├── prisma/schema.prisma
│   │   ├── src/
│   │   │   ├── app/[locale]/
│   │   │   ├── components/{layout, onboarding, workouts, ui}/
│   │   │   ├── lib/workouts/
│   │   │   ├── messages/
│   │   │   ├── schemas/
│   │   │   ├── store/
│   │   │   └── types/
│   │   ├── package.json, tailwind.config.js, tsconfig.json
│   └── api/
│       ├── src/routes/, workouts/
│       ├── .env, package.json
├── packages/{database, exercises}/
├── types/next-intl.d.ts
├── scripts/ (reserved)
├── docker-compose.yml
└── pnpm-workspace.yaml, tsconfig.json, .gitignore
```

---

## 🔄 Development Guidelines

### Local Development

* Docker for PostgreSQL
* Hot reloading (frontend + backend)
* Environment variables from `.env`
* TypeScript strict mode

### Code Quality

* ESLint + Prettier enforced
* Git hooks for pre-commit checks
* Conventional commits, atomic changes

### Deployment

* Vercel for web + API
* Supabase or Railway for DB
* Prisma for migrations

---

## ⚠️ Known Limitations & Edge Cases

* **Exercise Database Completeness**: The alternatives database may not cover all possible injury combinations
* **Personalization Depth**: The current algorithm focuses on binary exercise exclusion rather than modification intensity
* **Conflicting Conditions**: For users with multiple conflicting conditions, the most restrictive option is always chosen
* **Session State**: After login, there's a brief period when session state is initializing which can cause authentication checks to incorrectly redirect users
* **Type Definitions**: Exercise type definitions exist in both `packages/exercises/src/types.ts` and `apps/web/src/types/exercise.ts` and must be kept in sync manually
* **Profile Model**: The `equipment` and `dietary` fields in the Profile model are defined as String arrays but expected as Strings in some parts of the codebase

## 📈 Future Work & Roadmap

### Version 1.x (Current)
* Basic injury-aware exercise replacement
* Core workout program templates
* Fundamental nutrition recommendations

### Version 2.0 (Planned)
* Enhanced injury adaptation with exercise modification (not just replacement)
* Machine learning-based program optimization
* Integration with wearable fitness trackers
* Expanded exercise database with video demonstrations
* Progressive overload tracking and automatic intensity adjustment

### Version 3.0 (Roadmap)
* Social features and community challenges
* Professional trainer marketplace
* Real-time workout guidance with form analysis
* Nutrition tracking with barcode scanning

## 🤖 AI Assistant Usage & Best Practices

### Context Awareness

* Read OVERVIEW\.md at session start
* Understand monorepo layout and package boundaries
* Respect i18n, auth, and type safety principles
* Be aware of the injury adaptation system when modifying workout-related code

### Code Practices

* Use pnpm, follow folder structure
* Avoid duplication, reuse helpers/hooks
* Always validate with Zod
* Maintain null-checks, error handling, and loading states
* Add JSDoc for complex logic

### Review & Security

* Check for vulnerabilities
* Ensure performance considerations
* Validate i18n coverage
* Avoid console logs and dead code

---

## 🧪 API Structure & Patterns

### Example Response

```ts
// GET /api/profile
Response: {
  id: string;
  email: string;
  profile: {
    gender: 'male' | 'female' | 'other';
    birthYear: number;
    height: number;
    weight: number;
    goal: 'lose_weight' | 'gain_muscle' | 'maintain_fitness';
    activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  }
}
```

### API Route Pattern

```ts
// apps/api/src/routes/example.ts
import { validateRequest } from '@/lib/validation';
import { handleError } from '@/lib/error';

export const handler = async (req: Request, res: Response) => {
  try {
    const validatedData = await validateRequest(req);
    const result = await processData(validatedData);
    return res.json(result);
  } catch (error) {
    return handleError(error, res);
  }
};
```

### Component Pattern

```ts
// apps/web/src/components/Example.tsx
import { useTranslation } from 'next-intl';
import { useQuery } from '@tanstack/react-query';

export const Example = () => {
  const t = useTranslation();
  const { data, isLoading } = useQuery({
    queryKey: ['example'],
    queryFn: fetchExampleData,
  });

  if (isLoading) return <LoadingSpinner />;
  if (!data) return <ErrorMessage />;

  return <div>{t('example.message')}</div>;
};
```

---
