import express, { Request, Response } from "express";
import { PrismaClient, EventStatus } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
const router = express.Router();

router.get("/tournaments/ongoing", async (req: Request, res: Response) => {
  try {
    const tournaments = await prisma.tournament.findMany({
      where: {
        registrationStatus: EventStatus.ONGOING,
      },
      select: {
        id: true,
        tournamentName: true,
        sport: {
          select: {
            sportName: true,
          },
        },
        fee: true,
        city: true,
        registrationStatus: true,
        startDate: true,
        endDate: true,
        _count: {
          select: {
            TournamentParticipation: true,
          },
        },
      },
    });
    const response = tournaments.map((tournament) => {
      return {
        tournamentName: tournament.tournamentName,
        sportName: tournament.sport.sportName,
        city: tournament.city,
        teamsParticipating: tournament._count.TournamentParticipation,
        registrationStatus: tournament.registrationStatus,
        fee: tournament.fee,
        startDate: tournament.startDate,
      };
    });
  } catch (error) {}
  res.status(500).json({ error: "Internal server error" });
});

router.get("/tournaments/upcoming", async (req: Request, res: Response) => {
  try {
    const tournaments = await prisma.tournament.findMany({
      where: {
        registrationStatus: EventStatus.UPCOMING,
      },
      select: {
        id: true,
        tournamentName: true,
        sport: {
          select: {
            sportName: true,
          },
        },
        fee: true,
        city: true,
        registrationStatus: true,
        startDate: true,
        endDate: true,
        _count: {
          select: {
            TournamentParticipation: true,
          },
        },
      },
    });
    const response = tournaments.map((tournament) => {
      return {
        title: tournament.tournamentName,
        sportName: tournament.sport.sportName,
        locationCity: tournament.city,
        teamsParticipating: tournament._count.TournamentParticipation,
        status: tournament.registrationStatus,
        fee: tournament.fee,
        startDate: tournament.startDate,
      };
    });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/tournaments/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tournament = await prisma.tournament.findUnique({
      where: { id: parseInt(id) },
    });
    if (tournament) {
      res.json(tournament);
    } else {
      res.status(404).json({ error: "Tournament not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/tournaments/new", async (req: Request, res: Response) => {
  const tournament = req.body['tournament'];
  const details = tournament.details;
  const links = tournament.details;
  const prize = tournament.details;
  const schedules = tournament.details;
  const registrationStatus = tournament.registrationStatus;

  console.log(registrationStatus)
  
  try {
    const {
      details: {
        tournamentName,
        startDate,
        endDate,
        venueName,
        city,
        tournamentDetails,
      },
      links: { officialLink, facebookLink, xLink, instaLink, posterImage },
      prize: { prizeName, trophy, medal, amount },
      schedules,
      registrationStatus,
      sportId,
      organizerId,
    } = req.body.tournament; // <-- Access the `tournament` object

    console.log("Checkpoint 1");

    if (!Object.values(EventStatus).includes(registrationStatus)) {
      return res.status(400).json({ error: "Invalid registration status" });
    }

    console.log("White Ferrari")
    // Create the tournament in the database
    const tournament = await prisma.tournament.create({
      data: {
        tournamentName: tournamentName,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        city: city,
        venueName: venueName,
        tournamentDetails: tournamentDetails,
        
        sport: { connect: { id: sportId } }, // Corrected: use 'connect' for existing relations
        organizer: { connect: { id: organizerId } }, // Corrected: use 'connect' for existing relations
        links: {
          create: {
            officialLink: officialLink || "",
            facebookLink: facebookLink || "",
            xLink: xLink || "",
            instaLink: instaLink || "",
            posterImage: posterImage || "",
          },
        },
        schedule: {
          create: schedules.map((schedule: any) => ({
            scheduleName: schedule.scheduleName,
            startDate: new Date(schedule.startDate),
            startTime: schedule.startTime,
            endDate: new Date(schedule.endDate),
            endTime: schedule.endTime,
          })),
        },
        prizes: {
          create: {
            prizeName: prizeName || "",
            trophy: trophy,
            medal: medal,
            amount: parseFloat(amount) || 0, // Ensure amount is a number
          },
        },
      },
      include: {
        links: true,
        schedule: true,
        prizes: true,
      },
    });

    console.log("Checkpoint 2");

    res.json(tournament);
  } catch (error) {
    console.error("Error creating tournament:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/tournaments/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    tournamentName,
    sportId,
    city,
    registrationStatus,
    fee,
    startDate,
    endDate,
    venueName,
  } = req.body;
  try {
    const tournament = await prisma.tournament.update({
      where: { id: parseInt(id) },
      data: {
        tournamentName: tournamentName,
        sportId: sportId,
        city: city,
        registrationStatus: registrationStatus,
        fee: fee,
        startDate: startDate,
        endDate: endDate,
        venueName: venueName,
      },
    });
    res.json(tournament);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/tournaments/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.tournament.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Tournament deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
