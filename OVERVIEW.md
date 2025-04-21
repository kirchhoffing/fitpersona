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
- **Authentication**: NextAuth.js (magic link via email)
- **Deployment**: Vercel (frontend + API routes), Supabase or Railway (PostgreSQL hosting)
- **Package Manager**: pnpm
- **Internationalization**: next-intl (multi-language support)
- **Development Tools**: Docker, ESLint, Prettier, TypeScript
- **Testing**: Jest, React Testing Library (planned)

---

## 🛠️ Features & Architecture

### 🧑‍💼 User Profile & Authentication
- Magic link login & register
- Multi-step onboarding form with state persistence
- Type-safe Zod validation for all user inputs
- Secure session-based authentication
- User preferences and settings management

### 🧬 Database Schema
**Profile Model**:
- `gender`, `birthYear`
- `height`, `weight`
- `goal`: lose_weight, gain_muscle, maintain_fitness
- `activityLevel`, `equipment`
- `dietary`: dietary restrictions
- `preferences`: user preferences and settings
- `createdAt`, `updatedAt` timestamps

### 🏋️ Workout Programs
- Predefined 3-Day Full Body workout template
- Localized workout names & descriptions
- Progress tracking integration
- Program assignment based on onboarding data
- Exercise library with detailed instructions
- Workout history and progress tracking

### 🥗 Nutrition Features
- Personalized meal plans based on goals
- Dietary restriction support
- Calorie and macro tracking
- Recipe suggestions and meal planning

---

## 🌍 Internationalization

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
│   ├── web/                         # Next.js frontend
│   │   └── src/
│   │       ├── app/
│   │       │   └── [locale]/        # i18n routes
│   │       ├── components/
│   │       │   ├── layout/          # Header, layout components
│   │       │   ├── profile/         # Profile UI components
│   │       │   └── workouts/        # Workout-related UI
│   │       └── messages/            # Translation JSON files
│   └── api/                         # Express backend
│       └── src/
│           ├── routes/              # API route handlers
│           │   ├── onboarding.ts
│           │   └── workouts.ts
│           └── workouts/            # Workout logic files
│               └── 3dayFullBody.ts
├── packages/
│   ├── database/
│   │   ├── prisma/
│   │   │   └── schema.prisma        # Prisma schema
│   │   └── src/
│   │       └── client.ts            # PrismaClient setup
│   ├── exercises/                   # Exercise library and logic
│   │   ├── src/
│   │   │   ├── exercises.ts         # Exercise definitions
│   │   │   └── types.ts             # Type definitions
│   │   └── package.json
│   └── config/                      # Shared app config
├── types/                           # Global TypeScript types
├── pnpm-workspace.yaml              # Monorepo workspace
├── package.json                     # Root package.json
├── tsconfig.json                    # TypeScript configuration
├── docker-compose.yml               # Docker configuration
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
