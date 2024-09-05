-- DropForeignKey
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_sportsParticipationId_fkey";

-- AlterTable
ALTER TABLE "Tournament" ALTER COLUMN "sportsParticipationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_sportsParticipationId_fkey" FOREIGN KEY ("sportsParticipationId") REFERENCES "SportsParticipation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
