# FitPersona - Setup Guide

This guide will help you set up the development environment for FitPersona.

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ (LTS)
- pnpm 8+
- Docker & Docker Compose
- PostgreSQL client (optional)

### 1. Initialize Monorepo

```bash
# Install pnpm globally
npm install -g pnpm

# Setup pnpm (Windows)
pnpm setup

# Initialize monorepo
pnpm init

# Create workspace configuration
mkdir -p apps/web apps/api packages/database packages/ui packages/config
```

### 2. Install Dependencies

```bash
# Install workspace dependencies
pnpm add -w typescript@5.3.3 @types/node@20.11.19

# Install frontend dependencies
cd apps/web
pnpm add next@14.1.0 react@18.2.0 react-dom@18.2.0
pnpm add -D typescript@5.3.3 @types/react@18.2.55 @types/react-dom@18.2.19
pnpm add tailwindcss@3.4.1 postcss@8.4.35 autoprefixer@10.4.17
pnpm add @tanstack/react-query@5.20.5 zod@3.22.4 next-auth@4.24.5

# Install backend dependencies
cd ../api
pnpm add express@4.18.2 @types/express@4.17.21
pnpm add -D typescript@5.3.3 ts-node@10.9.2 ts-node-dev@2.0.0
pnpm add zod@3.22.4 @prisma/client@5.9.1

# Install shared dependencies
cd ../../packages/database
pnpm add prisma@5.9.1 @prisma/client@5.9.1
```

### 3. Database Setup

```bash
# Start PostgreSQL container
docker-compose up -d

# Initialize Prisma (in packages/database)
pnpm prisma generate
pnpm prisma migrate dev --name init
```

### 4. Environment Variables

Create `.env` files in respective directories:

#### packages/database/.env
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/fitpersona"
```

#### apps/web/.env
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/fitpersona"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
EMAIL_SERVER_HOST="smtp.example.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="user@example.com"
EMAIL_SERVER_PASSWORD="password"
EMAIL_FROM="noreply@example.com"
```

#### apps/api/.env
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/fitpersona"
PORT=3001
```

### 5. Development Scripts

Add these scripts to root `package.json`:

```json
{
  "scripts": {
    "dev:web": "pnpm --filter web dev",
    "dev:api": "pnpm --filter api dev",
    "build": "pnpm -r build",
    "lint": "pnpm -r lint",
    "typecheck": "pnpm -r typecheck",
    "test": "pnpm -r test"
  }
}
```

## 🚀 Development Workflow

1. Start database:
```bash
docker-compose up -d
```

2. Run migrations:
```bash
cd packages/database
pnpm prisma migrate dev
```

3. Start development servers:
```bash
# Terminal 1 - Frontend
pnpm dev:web

# Terminal 2 - Backend
pnpm dev:api
```

## 📝 Version Information

All packages are using their latest stable (LTS) versions:

- TypeScript: 5.3.3
- Next.js: 14.1.0
- React: 18.2.0
- Express: 4.18.2
- Prisma: 5.9.1
- Tailwind CSS: 3.4.1
- NextAuth.js: 4.24.5
- TanStack Query: 5.20.5
- Zod: 3.22.4 