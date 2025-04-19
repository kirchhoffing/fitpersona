-- CreateEnum
CREATE TYPE "DifficultyLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT');

-- CreateTable
CREATE TABLE "Movement" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "difficulty" "DifficultyLevel" NOT NULL,
    "targetMuscles" TEXT[],
    "equipment" TEXT[],
    "videoUrl" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contraindication" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contraindication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovementContraindication" (
    "movementId" TEXT NOT NULL,
    "contraindicationId" TEXT NOT NULL,

    CONSTRAINT "MovementContraindication_pkey" PRIMARY KEY ("movementId","contraindicationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contraindication_name_key" ON "Contraindication"("name");

-- AddForeignKey
ALTER TABLE "MovementContraindication" ADD CONSTRAINT "MovementContraindication_movementId_fkey" FOREIGN KEY ("movementId") REFERENCES "Movement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovementContraindication" ADD CONSTRAINT "MovementContraindication_contraindicationId_fkey" FOREIGN KEY ("contraindicationId") REFERENCES "Contraindication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
