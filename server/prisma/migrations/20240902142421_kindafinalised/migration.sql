/*
  Warnings:

  - You are about to drop the `CompetitionEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompetitionParticipation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Organizer` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ProfileType" AS ENUM ('ORGANIZER', 'USER');

-- CreateEnum
CREATE TYPE "SportType" AS ENUM ('TEAM', 'SOLO');

-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('ONGOING', 'FINISHED', 'UPCOMING');

-- DropForeignKey
ALTER TABLE "CompetitionEvent" DROP CONSTRAINT "CompetitionEvent_organizerId_fkey";

-- DropForeignKey
ALTER TABLE "CompetitionEvent" DROP CONSTRAINT "CompetitionEvent_sportId_fkey";

-- DropForeignKey
ALTER TABLE "CompetitionParticipation" DROP CONSTRAINT "CompetitionParticipation_competitionId_fkey";

-- DropForeignKey
ALTER TABLE "CompetitionParticipation" DROP CONSTRAINT "CompetitionParticipation_userId_fkey";

-- DropForeignKey
ALTER TABLE "Organizer" DROP CONSTRAINT "Organizer_academyId_fkey";

-- AlterTable
ALTER TABLE "Sports" ADD COLUMN     "sportType" "SportType" NOT NULL DEFAULT 'SOLO';

-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "profileType" "ProfileType" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "CompetitionEvent";

-- DropTable
DROP TABLE "CompetitionParticipation";

-- DropTable
DROP TABLE "Organizer";

-- CreateTable
CREATE TABLE "TournamentParticipation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tournamentDate" TIMESTAMP(3) NOT NULL,
    "result" VARCHAR(100) NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "sportId" INTEGER NOT NULL,

    CONSTRAINT "TournamentParticipation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventParticipation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "participationDate" TIMESTAMP(3) NOT NULL,
    "result" VARCHAR(255),

    CONSTRAINT "EventParticipation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "sportId" INTEGER NOT NULL,
    "organizerId" INTEGER NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "status" "EventStatus" NOT NULL DEFAULT 'ONGOING',
    "fee" DOUBLE PRECISION DEFAULT 0,
    "eventDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tournament" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "sportId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "locationCity" VARCHAR(255) NOT NULL,
    "locationVenue" VARCHAR(255) NOT NULL,
    "competitionLevel" VARCHAR(50) NOT NULL,
    "status" "EventStatus" NOT NULL DEFAULT 'ONGOING',
    "requiredPlayers" INTEGER NOT NULL,
    "description" TEXT,
    "rules" TEXT,
    "fee" DOUBLE PRECISION,
    "organizerId" INTEGER NOT NULL,
    "sportsParticipationId" INTEGER,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "tournamentId" INTEGER NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prizes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "tournamentId" INTEGER NOT NULL,

    CONSTRAINT "Prizes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Links" (
    "id" SERIAL NOT NULL,
    "officialLink" TEXT,
    "xLink" TEXT,
    "igLink" TEXT,
    "fbLink" TEXT,
    "userProfileId" INTEGER,
    "eventId" INTEGER,
    "tournamentId" INTEGER,
    "sportsAcademyId" INTEGER,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SportsToSportsAcademy" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TournamentParticipation_userId_tournamentId_key" ON "TournamentParticipation"("userId", "tournamentId");

-- CreateIndex
CREATE UNIQUE INDEX "EventParticipation_userId_eventId_key" ON "EventParticipation"("userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "_SportsToSportsAcademy_AB_unique" ON "_SportsToSportsAcademy"("A", "B");

-- CreateIndex
CREATE INDEX "_SportsToSportsAcademy_B_index" ON "_SportsToSportsAcademy"("B");

-- AddForeignKey
ALTER TABLE "TournamentParticipation" ADD CONSTRAINT "TournamentParticipation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentParticipation" ADD CONSTRAINT "TournamentParticipation_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentParticipation" ADD CONSTRAINT "TournamentParticipation_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventParticipation" ADD CONSTRAINT "EventParticipation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventParticipation" ADD CONSTRAINT "EventParticipation_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_sportsParticipationId_fkey" FOREIGN KEY ("sportsParticipationId") REFERENCES "SportsParticipation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prizes" ADD CONSTRAINT "Prizes_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_sportsAcademyId_fkey" FOREIGN KEY ("sportsAcademyId") REFERENCES "SportsAcademy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SportsToSportsAcademy" ADD CONSTRAINT "_SportsToSportsAcademy_A_fkey" FOREIGN KEY ("A") REFERENCES "Sports"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SportsToSportsAcademy" ADD CONSTRAINT "_SportsToSportsAcademy_B_fkey" FOREIGN KEY ("B") REFERENCES "SportsAcademy"("id") ON DELETE CASCADE ON UPDATE CASCADE;
