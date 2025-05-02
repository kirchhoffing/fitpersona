/*
  Warnings:

  - You are about to drop the `Contraindication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Movement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MovementContraindication` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MovementContraindication" DROP CONSTRAINT "MovementContraindication_contraindicationId_fkey";

-- DropForeignKey
ALTER TABLE "MovementContraindication" DROP CONSTRAINT "MovementContraindication_movementId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "surname" TEXT;

-- DropTable
DROP TABLE "Contraindication";

-- DropTable
DROP TABLE "Movement";

-- DropTable
DROP TABLE "MovementContraindication";

-- DropEnum
DROP TYPE "DifficultyLevel";
