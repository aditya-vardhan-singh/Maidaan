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
        registrationFee: true,
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
    console.log(tournaments)
    const response = tournaments.map((tournament) => {
      return {
        id: tournament.id, 
        title: tournament.tournamentName,
        sport: tournament.sport.sportName,
        location: tournament.city,
        teamsParticipating: tournament._count.TournamentParticipation,
        status: tournament.registrationStatus,
        fee: tournament.registrationFee,
        startDate: tournament.startDate,
      };
    });
    res.json(response); 
  } catch (error) {
    console.error("Error fetching ongoing tournaments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
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
        registrationFee: true,
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
    console.log(tournaments)
    const response = tournaments.map((tournament) => {
      return {
        id: tournament.id, 
        title: tournament.tournamentName,
        sport: tournament.sport.sportName,
        location: tournament.city,
        teamsParticipating: tournament._count.TournamentParticipation,
        status: tournament.registrationStatus,
        fee: tournament.registrationFee,
        startDate: tournament.startDate,
      };
    });
    res.json(response);
  } catch (error) {
    console.error("Error fetching upcoming tournaments:", error);
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
  const userId = req.user?.id
  
  // ############
  // MESSAGE 1 🤌🏻
  // This is the type of input you will receive 👇🏻
  interface Tournament {
    details: {
      tournamentName: string;
      startDate: string;
      endDate: string;
      selectedOption: string;
      registrationFees: string;
      venueName: string;
      city: string;
      tournamentDetails: string;
    };
    links: {
      officialLink: string;
      facebookLink: string;
      xLink: string;
      instaLink: string;
      posterImage: string;
    };
    prize: {
      tournamentRules: string;
      prizeName: string;
      amount: string;
      trophy: boolean;
      medal: boolean;
      certificate: boolean;
      participationCertificate: boolean;
    };
    schedules: {
      scheduleName: string;
      startDate: string;
      startTime: string;
      endDate: string;
      endTime: string;
    }[];
    registrationStatus: string;
  }

  const tournament: Tournament = req.body.tournament;
  console.log(tournament)

  try {
    const sportExists = await prisma.sports.findUnique({
      where: { id: parseInt(tournament.details.selectedOption) },
    });

    if (!sportExists) {
      throw new Error(`The sport with id ${tournament.details.selectedOption} does not exist.`);
    }
    const tournaments = await prisma.tournament.create({
      data: {
        tournamentName: tournament.details.tournamentName,
        startDate: new Date(tournament.details.startDate),
        endDate: new Date(tournament.details.endDate),
        city: tournament.details.city,
        venueName: tournament.details.venueName,
        tournamentDetails: tournament.details.tournamentDetails,
        registrationFee: parseInt(tournament.details.registrationFees),
        sport: { connect: { id: parseInt(tournament.details.selectedOption) } }, 
        // organizer: { connect: { id: userId } }, 
        links: {
          create: {
            officialLink: tournament.links.officialLink || "",
            facebookLink: tournament.links.facebookLink || "",
            xLink: tournament.links.xLink || "",
            instaLink: tournament.links.instaLink || "",
            posterImage: tournament.links.posterImage || "",
          },
        },
        schedule: {
          create: tournament.schedules.map((schedule: any) => ({
            scheduleName: schedule.scheduleName,
            startDate: new Date(schedule.startDate),
            startTime: schedule.startTime,
            endDate: new Date(schedule.endDate),
            endTime: schedule.endTime,
          })),
        },
        prizes: {
          create: {
            prizeName: tournament.prize.prizeName || "",
            trophy: tournament.prize.trophy,
            medal: tournament.prize.medal,
            amount: parseFloat(tournament.prize.amount) || 0, 
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

    res.json(tournaments);
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
        registrationFee: fee,
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