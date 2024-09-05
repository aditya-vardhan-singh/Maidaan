// import express, { Request, Response } from "express";
// import { PrismaClient, SportType } from "@prisma/client";

// const prisma = new PrismaClient();
// const app = express();
// app.use(express.json());

// //Created Sports with IDs: [
// //     { id: 1, sportName: 'Cricket' },
// //     { id: 2, sportName: 'Football' },
// //     { id: 3, sportName: 'Tennis' },
// //     { id: 4, sportName: 'Badminton' },
// //     { id: 5, sportName: 'Swimming' },
// //     { id: 6, sportName: 'Running' },
// //     { id: 7, sportName: 'Yoga' },
// //     { id: 8, sportName: 'Gymnastics' },
// //     { id: 9, sportName: 'Martial Arts' },
// //     { id: 10, sportName: 'Weightlifting' },
// //     { id: 11, sportName: 'Cycling' },
// //     { id: 12, sportName: 'Volleyball' },
// //     { id: 13, sportName: 'Table Tennis' },
// //     { id: 14, sportName: 'Archery' },
// //     { id : 29, sportName: 'Basketball} 
// //   ]



// export async function createSports(){
//     const createdSports = await prisma.sports.create({
//         data: {
//             sportName: "Basketball",
//             sportType: SportType.TEAM
//         },
//         select: {
//             id: true,
//             sportName: true
//         }
//     });
//     console.log(createdSports)
// } 

