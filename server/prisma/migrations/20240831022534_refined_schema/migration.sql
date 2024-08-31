-- CreateEnum
CREATE TYPE "AuthType" AS ENUM ('LOCAL', 'GOOGLE');

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(60),
    "name" VARCHAR(100),
    "googleId" VARCHAR(30),
    "authType" "AuthType" NOT NULL DEFAULT 'LOCAL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitionParticipation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "participationDate" TIMESTAMP(3) NOT NULL,
    "result" VARCHAR(255),

    CONSTRAINT "CompetitionParticipation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SportsParticipation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sportId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "skillLevel" VARCHAR(50),

    CONSTRAINT "SportsParticipation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sports" (
    "id" SERIAL NOT NULL,
    "sportName" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500),
    "rules" TEXT,
    "equipmentRequired" VARCHAR(255),

    CONSTRAINT "Sports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitionEvent" (
    "id" SERIAL NOT NULL,
    "eventName" VARCHAR(200) NOT NULL,
    "sportId" INTEGER NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "organizerId" INTEGER NOT NULL,
    "competitionLevel" VARCHAR(50) NOT NULL,
    "req_players" INTEGER NOT NULL,
    "description" TEXT,
    "rules" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CompetitionEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingCourse" (
    "id" SERIAL NOT NULL,
    "courseName" VARCHAR(200) NOT NULL,
    "sportId" INTEGER NOT NULL,
    "description" TEXT,
    "duration" VARCHAR(100) NOT NULL,
    "fee" DECIMAL(10,2) NOT NULL,
    "academyId" INTEGER NOT NULL,

    CONSTRAINT "TrainingCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organizer" (
    "id" SERIAL NOT NULL,
    "organizerName" VARCHAR(200) NOT NULL,
    "contactInfo" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "academyId" INTEGER NOT NULL,

    CONSTRAINT "Organizer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SportsAcademy" (
    "id" SERIAL NOT NULL,
    "academyName" VARCHAR(200) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "facilities" TEXT,
    "contactInfo" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "SportsAcademy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_email_key" ON "UserProfile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_googleId_key" ON "UserProfile"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "CompetitionParticipation_userId_competitionId_key" ON "CompetitionParticipation"("userId", "competitionId");

-- CreateIndex
CREATE UNIQUE INDEX "SportsParticipation_userId_sportId_key" ON "SportsParticipation"("userId", "sportId");

-- AddForeignKey
ALTER TABLE "CompetitionParticipation" ADD CONSTRAINT "CompetitionParticipation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionParticipation" ADD CONSTRAINT "CompetitionParticipation_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "CompetitionEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SportsParticipation" ADD CONSTRAINT "SportsParticipation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SportsParticipation" ADD CONSTRAINT "SportsParticipation_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionEvent" ADD CONSTRAINT "CompetitionEvent_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionEvent" ADD CONSTRAINT "CompetitionEvent_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "Organizer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingCourse" ADD CONSTRAINT "TrainingCourse_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingCourse" ADD CONSTRAINT "TrainingCourse_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "SportsAcademy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organizer" ADD CONSTRAINT "Organizer_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "SportsAcademy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
