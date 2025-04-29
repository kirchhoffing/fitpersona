# 🏋️‍♂️ FitPersona - Development Context Overview

This document summarizes the **current scope, tech stack, features, and folder structure** of the FitPersona project. It is intended to provide context continuity for AI tools like Cursor or ChatGPT when working on the codebase.

---

## 🔧 Project Summary

FitPersona is a full-stack TypeScript application designed to create **personalized fitness and nutrition plans**. It collects user preferences, physical metrics, and goals to generate individualized recommendations.

Monorepo architecture is used for better modularization, scalability, and team collaboration.

---

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, Tailwind CSS, TypeScript, TanStack Query
- **Backend**: Express + TypeScript (ts-node + esbuild), Zod for validation
- **Database**: PostgreSQL (via Docker), Prisma ORM
- **Authentication**: Custom email/password (bcryptjs, SSR-safe, no native bindings)

- **Deployment**: Vercel (frontend + API routes), Supabase or Railway (PostgreSQL hosting)
- **Package Manager**: pnpm
- **Internationalization**: next-intl (multi-language support)
- **Development Tools**: Docker, ESLint, Prettier, TypeScript
- **Testing**: Jest, React Testing Library (planned)

---

## 🛠️ Features & Architecture

### 🧑‍💼 User Profile & Authentication
- Email/password registration and login (bcryptjs, SSR compatible)
- Multi-step onboarding form with state persistence
- Type-safe Zod validation for all user inputs
- Secure session-based authentication
- User preferences and settings management

---

### 🚦 Onboarding & Step System
- **Multi-step onboarding flow** guides users through profile creation, preferences, and fitness goals
- Each onboarding step is managed by a centralized step system (step IDs, progress, and state are tracked)
- Steps are fully localized using translation keys from language JSON files
- Step logic is modular for easy addition of new steps or questions
- Onboarding data is persisted and resumable
- Health conditions, risk factors, and all user-facing strings are sourced from translation files
- Dashboard layout recently reorganized: info/profile section now appears at the top, followed by a single calorie display, and the workout program at the bottom (no duplicate calorie estimation)

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
  goal          String?  // lose_weight, gain_muscle, maintain_fitness
  activityLevel String?
  equipment     String[]
  dietary       String[]
  preferences   Json?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  user          User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

**Exercise Database**:
- Centralized in `packages/exercises/src/exercise-data.ts`
- All referenced exercises in workout programs must be present here as distinct entries
- To avoid type errors, ensure the MuscleGroup type in both `packages/exercises/src/types.ts` and `apps/web/src/types/exercise.ts` are kept in sync (recently fixed by adding 'lats' to the web app)
  goal          String?  // lose_weight, gain_muscle, maintain_fitness
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
  id            String   @id @default(cuid())
  email         String   @unique
  password      String?
  name          String?
  emailVerified DateTime?
  image         String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  profile       Profile?
}
```

### 🏋️ Workout Programs
- Predefined 3-Day Full Body, Push/Pull/Legs, HIIT, and Bodyweight Home workout templates
- All exercises are now listed as distinct entries in the database (e.g., "Pull-up" and "Lat Pulldown" are separate, not combined)
- Recently added missing exercises referenced in workout programs, including: incline-bench-press, dumbbell-shoulder-press, lateral-raise, overhead-triceps-extension, seated-cable-row, barbell-curl, hammer-curl, leg-press, calf-raise, cable-biceps-curl
- Fixed 'cobra-stretch' to be categorized as 'core' (was 'stretch')
- Localized workout names & descriptions (next-intl)
- **All exercise names, muscle groups, and health risk conditions are fully localized via JSON language files** (no hardcoded UI strings)
- Progress tracking integration
- Program assignment based on onboarding data and central mapping logic (see below)
- Exercise library with detailed instructions
- Workout history and progress tracking
- "watchVideo" translation key added for exercise video links
- To add a new workout program, import it in `packages/workouts/workoutProgramMap.ts` and add a new mapping object to the `programRules` array. You can use specific values or `'any'` as a wildcard for `goal`, `workoutLocation`, and `daysPerWeek`.
- The selection logic automatically tries the most specific match first, then falls back to rules with `'any'` wildcards as needed (for example, `{ goal: 'any', workoutLocation: 'any', daysPerWeek: 5, program: fiveDayPPLWorkout }` covers all 5-day cases).
- There is no longer any hardcoded or special-case logic for 5+ days. All fallback and matching is handled by the data-driven rules and a clear priority system.
- See the `WorkoutCriteria` type for available matching fields.

---

### 🏋️‍♂️ Exercises Page
- Dedicated multilingual page listing all exercises with images, names, muscle groups, and risk conditions.
- All exercise-related strings (names, muscle groups, risk conditions, section titles) are fully localized via JSON language files.
- Users can search and filter exercises by name or muscle group in their selected language.
- UI is styled with Tailwind CSS for a modern, accessible experience.
- Navigation from the home page is locale-aware and uses a localized button label.

### 🥗 Nutrition Features
- Personalized meal plans based on goals
- Dietary restriction support (dietary preferences are localized)
- Calorie and macro tracking
- Recipe suggestions and meal planning

---

## 🌍 Internationalization

### Translation Key Structure
- All onboarding and dashboard fields use translation keys from `apps/web/src/messages/{locale}.json`.
- Workout location keys: `onboarding.steps.equipment.body_weight`, `onboarding.steps.equipment.home_equipment`, `onboarding.steps.equipment.gym`.
- Dietary preferences keys: `onboarding.steps.health.{preference}` (e.g., `back_pain`, `diabetes`, etc.).
- Dashboard fallback: `dashboard.none` for empty dietary preferences.
- WorkoutProgram: `WorkoutProgram.watchVideo` for "Watch Video" links.

### Notes
- All user-facing strings in the dashboard and onboarding are now locale-aware and never display raw translation keys
- If a translation is missing, the key will be added to the corresponding JSON file for consistency
- Dashboard and workout program UI are fully localized and updated to reflect the new section order

- **Languages Supported**:
  - English (default)
  - Turkish
  - German

- **Implementation**:
  - Translations stored in: `apps/web/src/messages/{locale}.json`
  - Routing based on: `app/[locale]/` directory
  - Language switcher with flag icons: `public/flags/`
  - Dynamic content localization
  - Date and number formatting per locale

---

## 📁 Folder Structure

```plaintext
fitpersona/
├── apps/
│   ├── web/                         # Next.js frontend app
│   │   ├── public/
│   │   │   └── flags/               # Flag icons for language switcher
│   │   ├── prisma/
│   │   │   ├── migrations/
│   │   │   └── schema.prisma        # Prisma schema for web app
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── [locale]/        # Locale-based routes (dashboard, onboarding, exercises, etc)
│   │   │   │   ├── api/             # API routes (Next.js)
│   │   │   │   ├── auth/            # Auth pages
│   │   │   │   ├── onboarding/      # Onboarding pages
│   │   │   │   └── profile/         # Profile pages
│   │   │   ├── components/
│   │   │   │   ├── layout/          # Layout components
│   │   │   │   ├── profile/         # Profile UI components
│   │   │   │   ├── onboarding/      # Onboarding UI (including steps/)
│   │   │   │   ├── workouts/        # Workout UI components
│   │   │   │   └── ui/              # Shared UI components (badge, button, card)
│   │   │   ├── config/              # App-level config
│   │   │   ├── i18n/                # i18n config and helpers
│   │   │   ├── lib/
│   │   │   │   ├── workouts/        # Exercise/workout logic (exercise-data.ts, 3dayFullBody.ts, etc)
│   │   │   │   └── ...
│   │   │   ├── messages/            # Translation JSON files (en.json, tr.json, de.json)
│   │   │   ├── schemas/             # Zod schemas
│   │   │   ├── store/               # State management
│   │   │   └── types/               # Local TypeScript types
│   │   ├── .env                     # Env vars for web app
│   │   ├── package.json
│   │   ├── tailwind.config.js
│   │   └── tsconfig.json
│   └── api/                         # Express backend app
│       ├── src/
│       │   ├── routes/              # API route handlers
│       │   └── workouts/            # Workout logic files
│       ├── .env
│       └── package.json
├── packages/
│   ├── database/
│   │   ├── prisma/
│   │   │   ├── migrations/
│   │   │   └── schema.prisma        # Shared Prisma schema
│   │   ├── src/
│   │   │   └── client.ts            # PrismaClient setup
│   │   ├── package.json
│   ├── exercises/
│   │   ├── src/
│   │   │   ├── exercise-data.ts     # Central exercise data
│   │   │   ├── index.ts
│   │   │   └── types.ts             # Exercise types
│   │   ├── package.json
├── types/
│   └── next-intl.d.ts               # Global TypeScript types for i18n
├── scripts/                         # (Reserved for custom scripts)
├── pnpm-workspace.yaml              # Monorepo workspace
├── package.json                     # Root package.json
├── tsconfig.json                    # TypeScript configuration
├── docker-compose.yml               # Docker Compose config
└── .gitignore                       # Git ignore rules
```

---

## 🔄 Development Guidelines

### Local Development
- Docker for PostgreSQL database
- Hot reloading for both frontend and backend
- Environment variables management
- TypeScript strict mode enabled

### Code Quality & Testing
- ESLint and Prettier for code quality
- TypeScript for type safety
- Unit and integration tests
- Git hooks for pre-commit checks

### Version Control
- Branch strategy: main, develop, feature/*, fix/*, hotfix/*
- Conventional commits
- Atomic commits with clear messages

### Deployment
- Vercel for frontend and API routes
- Supabase/Railway for PostgreSQL
- Automated deployments and previews
- Prisma for database migrations

---

## 🤖 AI Assistant Guidelines

### Context Maintenance
- Always read this OVERVIEW.md file at the start of each new chat session
- Maintain awareness of the monorepo structure and package relationships
- Consider internationalization requirements for all new features
- Follow TypeScript best practices and maintain type safety

### Development Practices
- Use pnpm for package management
- Follow the established folder structure
- Maintain separation of concerns between apps and packages
- Consider both frontend and backend implications of changes

### Feature Implementation
- Consider internationalization from the start
- Implement proper validation using Zod
- Follow the established authentication patterns
- Maintain type safety across the stack

## 🛠️ Development Environment Setup

### Prerequisites
- Node.js 18+ and pnpm
- Docker and Docker Compose
- PostgreSQL client (optional)

### Initial Setup
1. Clone the repository
2. Install dependencies: `pnpm install`
3. Copy `.env.example` to `.env` and fill in required values
4. Start PostgreSQL: `docker-compose up -d`
5. Run database migrations: `pnpm prisma migrate dev`
6. Start development servers:
   - Frontend: `pnpm dev:web`
   - Backend: `pnpm dev:api`

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: NextAuth.js secret
- `NEXTAUTH_URL`: Base URL for authentication
- `SMTP_*`: Email configuration for magic links

## 🔒 Security & Performance

### Security Measures
- Magic link authentication
- Role-based access control (RBAC)
- Session management with secure cookies
- Rate limiting on API endpoints
- Data encryption at rest
- Input sanitization and validation
- CORS configuration
- Regular security audits

### Performance Optimization
- Image optimization
- Code splitting and lazy loading
- Client-side caching
- Bundle size monitoring
- Database query optimization
- Response caching
- Connection pooling

## 🧪 Testing & API

### Testing Requirements
- Unit tests: 80% coverage for critical business logic
- Integration tests: 60% coverage for API routes
- E2E tests for critical user flows
- Tools: Jest, React Testing Library, Supertest, Playwright

### When to Write Unit Tests
- Complex calculations and transformations
- Business logic functions
- Data validation and sanitization
- Utility functions with multiple edge cases
- State management logic

### When Not to Write Unit Tests
- Simple UI components
- Basic prop passing
- API route handlers (use integration tests instead)
- Simple state updates
- Configuration files

### API Structure
- `/api/auth/*`: Authentication endpoints
- `/api/profile`: User profile management
- `/api/workouts`: Workout program endpoints
- `/api/nutrition`: Nutrition plan endpoints

### Example Response
```typescript
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

## 📦 Dependencies & Contributing

### Major Dependencies
- Next.js: ^14.0.0
- React: ^18.2.0
- TypeScript: ^5.0.0
- Prisma: ^5.0.0
- NextAuth.js: ^4.0.0
- TanStack Query: ^5.0.0

### Update Policy
- Security updates: Immediate
- Minor updates: Monthly
- Major updates: Quarterly with testing

### Contributing Process
1. Create feature branch from `develop`
2. Follow conventional commits
3. Update documentation if needed
4. Add tests for new features
5. Request review from at least one maintainer

### Code Review Checklist
- [ ] TypeScript types are correct
- [ ] Tests are added/updated
- [ ] Documentation is updated
- [ ] No console.log statements
- [ ] Code follows style guide
- [ ] Performance impact considered

## 🚨 Error Handling Patterns

### Frontend Error Handling
- Use error boundaries for React components
- Implement toast notifications for user feedback
- Handle API errors with TanStack Query error states
- Validate forms with Zod schemas

### Backend Error Handling
- Use custom error classes for different error types
- Implement global error middleware
- Return consistent error response format:
```typescript
{
  error: {
    code: string;
    message: string;
    details?: unknown;
  }
}
```

## 🔄 Common Patterns

### API Route Pattern
```typescript
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
```typescript
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

## 🤖 AI Assistant Best Practices

### Code Generation
- Always use TypeScript with strict mode
- Follow the established folder structure
- Use existing utility functions and hooks
- Consider internationalization in all new code
- Add proper error handling and loading states

### Code Review
- Check for potential security vulnerabilities
- Verify type safety and null checks
- Ensure proper error handling
- Validate internationalization support
- Check performance implications

### Documentation
- Add JSDoc comments for complex functions
- Document edge cases and error scenarios
- Include examples for complex logic
- Update relevant documentation files

### Testing
- Add unit tests for new functions
- Include integration tests for API routes
- Test error scenarios and edge cases
- Verify internationalization support
