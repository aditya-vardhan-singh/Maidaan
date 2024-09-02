/*
  Warnings:

  - Made the column `sportsParticipationId` on table `Tournament` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_sportsParticipationId_fkey";

-- AlterTable
ALTER TABLE "Prizes" ALTER COLUMN "amount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tournament" ALTER COLUMN "sportsParticipationId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_sportsParticipationId_fkey" FOREIGN KEY ("sportsParticipationId") REFERENCES "SportsParticipation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
