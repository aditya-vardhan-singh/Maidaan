import { PrismaClient, UserProfile, AuthType } from "@prisma/client";
import { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

declare global {
  namespace Express {
    interface User extends UserProfile {}
  }
}

export async function initPassport(app: Express): Promise<void> {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(passport.initialize());
  app.use(passport.session());
    
  passport.use(
    "local",
    new LocalStrategy(async function verify(username: string, password: string, cb: (error: any, user?: Express.User | false, options?: { message: string }) => void) {
      try {
        const user = await prisma.userProfile.findUnique({
          where: { username: username, authType: AuthType.LOCAL }
        });

        if (user && user.password) {
          const isValid = await bcrypt.compare(password, user.password);
          if (isValid) {
            return cb(null, user);
          } else {
            return cb(null, false, { message: "Incorrect password" });
          }
        } else {
          return cb(null, false, { message: "User not found or invalid authentication type" });
        }
      } catch (err) {
        console.error("Error during authentication:", err);
        return cb(err);
      }
    })
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
      async (accessToken: string, refreshToken: string, profile: any, cb: (error: any, user?: Express.User) => void) => {
        try {
          let user = await prisma.userProfile.findUnique({
            where: { email: profile.emails[0].value }
          });

          if (!user) {
            user = await prisma.userProfile.create({
              data: {
                email: profile.emails[0].value,
                username: profile.displayName,
                googleId: profile.id,
                authType: AuthType.GOOGLE
              }
            });
          } else if (user.authType !== AuthType.GOOGLE) {
            // Update existing user to link Google account
            user = await prisma.userProfile.update({
              where: { id: user.id },
              data: {
                googleId: profile.id,
                authType: AuthType.GOOGLE
              }
            });
          }

          return cb(null, user);
        } catch (err) {
          console.error("Error during Google authentication:", err);
          return cb(err);
        }
      }
    )
  );

  passport.serializeUser((user: Express.User, cb: (err: any, id?: number) => void) => {
    cb(null, user.id);
  });
  
  passport.deserializeUser(async (id: number, cb: (err: any, user?: Express.User | null) => void) => {
    try {
      const user = await prisma.userProfile.findUnique({
        where: { id: id }
      });
      cb(null, user);
    } catch (err) {
      cb(err);
    }
  });

  // Example route using Passport local strategy
  app.post('/login', passport.authenticate('local'), (req: Request, res: Response) => {
    res.json({ message: "Logged in successfully", user: req.user });
  });

  // Example route using Passport Google strategy
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/auth/google/secrets', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req: Request, res: Response) => {
      res.redirect('/');
    });

  // New route for user signup
  app.post('/signup', async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
      const existingUser = await prisma.userProfile.findFirst({
        where: {
          OR: [
            { username: username },
            { email: email }
          ]
        }
      });

      if (existingUser) {
        return res.status(400).json({ message: "Username or email already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.userProfile.create({
        data: {
          username,
          email,
          password: hashedPassword,
          authType: AuthType.LOCAL
        }
      });

      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "An error occurred during signup" });
    }
  });

  // Logout route
  app.get('/logout', (req: Request, res: Response) => {
    req.logout((err) => {
      if (err) {
        console.error("Error during logout:", err);
        return res.status(500).json({ message: "An error occurred during logout" });
      }
      res.json({ message: "Logged out successfully" });
    });
  });
}