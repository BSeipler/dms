/*
  Warnings:

  - You are about to drop the `Permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RolePermissions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Announcements" DROP CONSTRAINT "Announcements_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Children" DROP CONSTRAINT "Children_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Performance_Evaluations" DROP CONSTRAINT "Performance_Evaluations_staffId_fkey";

-- DropForeignKey
ALTER TABLE "Staff_Schedule" DROP CONSTRAINT "Staff_Schedule_staffId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_roleId_fkey";

-- DropForeignKey
ALTER TABLE "_RolePermissions" DROP CONSTRAINT "_RolePermissions_A_fkey";

-- DropForeignKey
ALTER TABLE "_RolePermissions" DROP CONSTRAINT "_RolePermissions_B_fkey";

-- DropTable
DROP TABLE "Permissions";

-- DropTable
DROP TABLE "Roles";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "_RolePermissions";
