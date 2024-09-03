/*
  Warnings:

  - You are about to drop the column `fbLink` on the `Links` table. All the data in the column will be lost.
  - You are about to drop the column `igLink` on the `Links` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Prizes` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `competitionLevel` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `locationCity` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `locationVenue` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `requiredPlayers` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Tournament` table. All the data in the column will be lost.
  - Added the required column `medal` to the `Prizes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trophy` to the `Prizes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleName` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tournamentName` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `venueName` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Links" DROP COLUMN "fbLink",
DROP COLUMN "igLink",
ADD COLUMN     "facebookLink" TEXT,
ADD COLUMN     "instaLink" TEXT,
ADD COLUMN     "posterImage" TEXT;

-- AlterTable
ALTER TABLE "Prizes" DROP COLUMN "title",
ADD COLUMN     "certificate" BOOLEAN,
ADD COLUMN     "medal" BOOLEAN NOT NULL,
ADD COLUMN     "participationCertificate" BOOLEAN,
ADD COLUMN     "prizeName" TEXT,
ADD COLUMN     "trophy" BOOLEAN NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "title",
ADD COLUMN     "endTime" TEXT NOT NULL,
ADD COLUMN     "scheduleName" TEXT NOT NULL,
ADD COLUMN     "startTime" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "competitionLevel",
DROP COLUMN "description",
DROP COLUMN "locationCity",
DROP COLUMN "locationVenue",
DROP COLUMN "requiredPlayers",
DROP COLUMN "status",
DROP COLUMN "title",
ADD COLUMN     "city" VARCHAR(255) NOT NULL,
ADD COLUMN     "registrationStatus" "EventStatus" NOT NULL DEFAULT 'ONGOING',
ADD COLUMN     "tournamentDetails" TEXT,
ADD COLUMN     "tournamentName" VARCHAR(200) NOT NULL,
ADD COLUMN     "venueName" VARCHAR(255) NOT NULL;
