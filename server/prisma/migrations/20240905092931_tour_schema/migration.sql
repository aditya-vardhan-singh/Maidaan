/*
  Warnings:

  - You are about to drop the column `fee` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `fee` on the `Tournament` table. All the data in the column will be lost.
  - Added the required column `sportsParticipationId` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "fee",
ADD COLUMN     "registrationFee" DOUBLE PRECISION DEFAULT 0;

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "fee",
ADD COLUMN     "registrationFee" DOUBLE PRECISION,
ADD COLUMN     "sportsParticipationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_sportsParticipationId_fkey" FOREIGN KEY ("sportsParticipationId") REFERENCES "SportsParticipation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
