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
        status: EventStatus.ONGOING,
      },
      select: {
        id: true,
        title: true,
        sport: {
          select: {
            sportName: true,
          },
        },
        fee: true,
        locationCity: true,
        status: true,
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
        title: tournament.title,
        sportName: tournament.sport.sportName,
        locationCity: tournament.locationCity,
        teamsParticipating: tournament._count.TournamentParticipation,
        status: tournament.status,
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
        status: EventStatus.UPCOMING,
      },
      select: {
        id: true,
        title: true,
        sport: {
          select: {
            sportName: true,
          },
        },
        fee: true,
        locationCity: true,
        status: true,
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
        title: tournament.title,
        sportName: tournament.sport.sportName,
        locationCity: tournament.locationCity,
        teamsParticipating: tournament._count.TournamentParticipation,
        status: tournament.status,
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

router.post("/tournaments", async (req: Request, res: Response) => {
  try {
    const {
      title,
      sportId,
      startDate,
      endDate,
      locationCity,
      locationVenue,
      competitionLevel,
      requiredPlayers,
      organizerId,
      sportsParticipationId,
      fee,
      description,
      rules,
      links,
      schedule,
      prizes,
    } = req.body;

    const tournament = await prisma.tournament.create({
      data: {
        title: title,
        sportId: sportId,
        startDate: startDate,
        endDate: endDate,
        locationCity: locationCity,
        locationVenue: locationVenue,
        competitionLevel: competitionLevel,
        requiredPlayers: requiredPlayers,
        organizerId: organizerId,
        sportsParticipationId: sportsParticipationId,
        fee: fee,
        description: description,
        rules: rules,
        links: {
          create: links,
        },
        schedule: {
          create: schedule,
        },
        prizes: {
          create: prizes,
        },
      },
      include: {
        links: true,
        schedule: true,
        prizes: true,
        sport: true,
        organizer: true,
        SportsParticipation: true,
      },
    });
    res.json(tournament);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/tournaments/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    title,
    sportId,
    locationCity,
    status,
    fee,
    startDate,
    endDate,
    locationVenue,
    competitionLevel,
    requiredPlayers,
  } = req.body;
  try {
    const tournament = await prisma.tournament.update({
      where: { id: parseInt(id) },
      data: {
        title,
        sportId,
        locationCity,
        status,
        fee,
        startDate,
        endDate: endDate,
        locationVenue: locationVenue,
        competitionLevel: competitionLevel,
        requiredPlayers: requiredPlayers,
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
