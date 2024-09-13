import express from 'express';
import cors from 'cors';
import { initPassport, initAuthRoutes } from './services/authService';  
import tournamentServices from './services/tournamentService'
// import userRoutes from './services/userService';  
// import organizerRoutes from './services/organizerService';  
import { PrismaClient, SportType, EventStatus } from '@prisma/client'; // Import PrismaClient
const prisma = new PrismaClient()

const app = express();
const port = process.env.PORT || 3000;

import { Request, Response } from 'express';


// const sportsData = [
//   { sportName: 'Cricket', sportType: SportType.TEAM },
//   { sportName: 'Hockey', sportType: SportType.TEAM },
//   { sportName: 'Kabaddi', sportType: SportType.TEAM },
//   { sportName: 'Football', sportType: SportType.TEAM },
//   { sportName: 'Badminton', sportType: SportType.SOLO },
//   { sportName: 'Tennis', sportType: SportType.SOLO },
//   { sportName: 'Table Tennis', sportType: SportType.SOLO },
//   { sportName: 'Boxing', sportType: SportType.SOLO },
//   { sportName: 'Wrestling', sportType: SportType.SOLO },
//   { sportName: 'Athletics', sportType: SportType.SOLO },
//   { sportName: 'Basketball', sportType: SportType.TEAM },
//   { sportName: 'Volleyball', sportType: SportType.TEAM },
//   { sportName: 'Kho Kho', sportType: SportType.TEAM },
//   { sportName: 'Golf', sportType: SportType.SOLO },
//   { sportName: 'Shooting', sportType: SportType.SOLO },
// ];

// const findsports = async (req: Request, res: Response) => {
//   const sports = await prisma.sports.findMany()
//   console.log(sports)
// }

// const req: Request = {} as Request;
// const res: Response = {} as Response;
// findsports(req, res);



// app.get("/tournaments/upcoming", async (req: Request, res: Response) => {
//   console.log('chk pttt 1')
//   try {
//     const tournaments = await prisma.tournament.findMany({
//       where: {
//         registrationStatus: EventStatus.UPCOMING,
//       },
//       select: {
//         id: true,
//         tournamentName: true,
//         sport: {
//           select: {
//             sportName: true,
//           },
//         },
//         registrationFee: true,
//         city: true,
//         registrationStatus: true,
//         startDate: true,
//         endDate: true,
//         _count: {
//           select: {
//             TournamentParticipation: true,
//           },
//         },
//       },
//     });
//     console.log(tournaments)
//     console.log('chk pttt 2')
//     const response = tournaments.map((tournament) => {
//       return {
//         title: tournament.tournamentName,
//         sport: tournament.sport.sportName,
//         location: tournament.city,
//         teamsParticipating: tournament._count.TournamentParticipation,
//         status: tournament.registrationStatus,
//         fee: tournament.registrationFee,
//         startDate: tournament.startDate,
//       };
//     });
//     console.log('chk pttt 3')
//     res.json(response);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });


app.use(cors());
app.use(express.json());


initPassport(app);

// Routes
app.use('/auth', initAuthRoutes());
app.use('', tournamentServices)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
