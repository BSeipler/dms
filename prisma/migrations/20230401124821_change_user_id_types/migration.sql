/*
  Warnings:

  - You are about to drop the `Organizations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Classrooms" DROP CONSTRAINT "Classrooms_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "Integrations" DROP CONSTRAINT "Integrations_organizationId_fkey";

-- AlterTable
ALTER TABLE "Announcements" ALTER COLUMN "authorId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Children" ALTER COLUMN "parentId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Classrooms" ALTER COLUMN "organizationId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Integrations" ALTER COLUMN "organizationId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Performance_Evaluations" ALTER COLUMN "staffId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Staff_Schedule" ALTER COLUMN "staffId" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Organizations";
