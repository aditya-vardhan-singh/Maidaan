/*
  Warnings:

  - You are about to drop the column `sportsParticipationId` on the `Tournament` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_sportsParticipationId_fkey";

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "sportsParticipationId";
