import { PrismaClient, User, Profile } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export * from './client';

export type { User, Profile } from '@prisma/client';