import { PrismaClient, UserProfile, AuthType } from "@prisma/client";
import session from "express-session";
import { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20";
import bcrypt from "bcrypt";
import { Router } from "express";
import env from "dotenv";

const prisma = new PrismaClient();
const router = Router();

declare global {
  namespace Express {
    interface User extends UserProfile {}
  }
}

env.config();

export async function initPassport(app: Express): Promise<void> {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(
    session({
      secret: process.env.SECRET_SESSION || [
        "yo pierre yoy wanna",
        "come out here",
      ],
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    "local",
    new LocalStrategy(async (email: string, password: string, cb) => {
      try {
        const user = await prisma.userProfile.findUnique({
          where: { email: email },
        });

        if (user && user.authType === AuthType.LOCAL && user.password) {
          const isValid = await bcrypt.compare(password, user.password);
          if (isValid) {
            return cb(null, user);
          } else {
            return cb(null, false, { message: "Incorrect password" });
          }
        } else {
          return cb(null, false, {
            message: "User not found or invalid authentication type",
          });
        }
      } catch (err) {
        console.error("Error during authentication:", err);
        return cb(err);
      }
    }),
  );

  passport.use(
    "google",
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: "http://localhost:3000/auth/google/secrets",
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
      },
      async (accessToken, refreshToken, profile, cb) => {
        try {
          const email = profile.emails && profile.emails[0]?.value;

          if (!email) {
            return cb(new Error("Email not found in Google profile."));
          }

          let user = await prisma.userProfile.findUnique({
            where: { email: email },
          });

          if (!user) {
            user = await prisma.userProfile.create({
              data: {
                email: email,
                googleId: profile.id,
                authType: AuthType.GOOGLE,
              },
            });
          } else if (user.authType !== AuthType.GOOGLE) {
            user = await prisma.userProfile.update({
              where: { id: user.id },
              data: {
                googleId: profile.id,
                authType: AuthType.GOOGLE,
              },
            });
          }

          return cb(null, user);
        } catch (err) {
          console.error("Error during Google authentication:", err);
          return cb(err);
        }
      },
    ),
  );

  passport.serializeUser((user: Express.User, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser(async (id: number, cb) => {
    try {
      const user = await prisma.userProfile.findUnique({
        where: { id: id },
      });
      cb(null, user);
    } catch (err) {
      cb(err);
    }
  });
}

export function initAuthRoutes(): Router {
  router.post(
    "/login",
    passport.authenticate("local"),
    (req: Request, res: Response) => {
      res.json({ message: "Logged in successfully", user: req.user });
    },
  );

  router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] }),
  );

  router.get(
    "/google/secrets",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req: Request, res: Response) => {
      res.redirect("/");
    },
  );

  router.post("/register", async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const existingUser = await prisma.userProfile.findFirst({
        where: {
          email: email,
        },
      });

      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Email already in use" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.userProfile.create({
        data: {
          email: email,
          password: hashedPassword,
          authType: AuthType.LOCAL,
        },
      });

      req.login(newUser, (err) => {
        console.log("success");
        res.redirect("/profile-page/edit-profile");
      });
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "An error occurred during signup" });
    }
  });

  router.get("/logout", (req: Request, res: Response) => {
    req.logout((err) => {
      if (err) {
        console.error("Error during logout:", err);
        return res
          .status(500)
          .json({ message: "An error occurred during logout" });
      }
      res.json({ message: "Logged out successfully" });
    });
  });

  return router;
}
