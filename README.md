# FitPersona - Personalized Fitness & Nutrition Planning Platform

A full-stack TypeScript application for creating personalized fitness and nutrition plans.

> 📋 **Setup Instructions**: For detailed setup and installation guide, please refer to [SETUP.md](./SETUP.md)

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router) + React 18, Tailwind CSS, TypeScript, TanStack Query
- **Backend**: Express + TypeScript (ts-node + esbuild), Zod validation
- **Database**: Prisma + PostgreSQL (Docker)
- **Authentication**: NextAuth.js (Email magic link)
- **Deployment**: Vercel (frontend + API routes) & Railway/Supabase (PostgreSQL)
- **Package Manager**: pnpm (for efficient monorepo management)
- **Internationalization**: next-intl (for multi-language support)

## 🛠️ Recent Updates

### User Profile & Authentication
- Added user profile creation with detailed fitness information
- Implemented secure authentication using NextAuth.js
- Created multi-step onboarding form with state management
- Added type-safe form validation and API endpoints

### Database Schema
- Added Profile model with fields:
  - Personal info (gender, birth year)
  - Physical metrics (height, weight)
  - Fitness goals and preferences
  - Activity level and equipment availability
  - Dietary preferences

### Workout Programs
- Added 3-Day Full Body Program with bilingual support
- Implemented workout program creation and management
- Added exercise tracking and progress monitoring
- Integrated with user profiles and preferences

## 🌍 Internationalization

The application supports three languages:
- English (default)
- Turkish
- German

Language switching is available through a user-friendly interface with country flags. Translations are managed through JSON files in the `src/messages` directory.

## 📦 Project Structure

```
fitpersona/
├── apps/
│   ├── web/          # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   └── [locale]/    # Internationalized routes
│   │   │   ├── components/
│   │   │   │   ├── layout/      # Layout components
│   │   │   │   ├── profile/     # Profile-related components
│   │   │   │   └── workouts/    # Workout-related components
│   │   │   └── messages/        # Translation files
│   │   └── public/
│   │       └── flags/           # Country flag SVGs
│   └── api/          # Express backend
│       ├── src/
│       │   ├── routes/          # API routes
│       │   │   └── workouts.ts  # Workout program endpoints
│       │   └── workouts/        # Workout program definitions
│       │       └── 3dayFullBody.ts
├── packages/
│   ├── database/     # Prisma schema & client
│   │   └── prisma/
│   │       └── schema.prisma
│   │   └── src/
│   │       └── client.ts
│   ├── ui/           # Shared UI components
│   └── config/       # Shared configuration
├── pnpm-workspace.yaml
└── package.json
```

## ✨ Key Features

### Profile Creation
- Multi-step onboarding form
- Personal information collection
- Fitness goals and preferences
- Medical conditions tracking
- Equipment availability
- Multi-language support

### Workout Programs
- Pre-built workout templates
- Exercise variations
- Progress tracking
- Bilingual support
- Detailed exercise instructions
- Cardio recommendations

### Internationalization
- Seamless language switching
- Country flag indicators
- URL-based locale routing
- Translation management
- Fallback to default language

## 📝 License

MIT 