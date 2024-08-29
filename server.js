/*** IMPORTS ***/

import express from "express";
import pg from "pg";
import bcrypt from "bcrypt";
import env from "dotenv";
import session from "express-session";
import bodyParser from "body-parser";
import passport from "passport";
import { Strategy } from "passport-strategy";

/*** INIT ***/

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

/*** MIDDLEWARES ***/

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
  user: process.env.PG_USERNAME,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

app.get("/", (req, res) => {
  res.send({ message: "Welcome to home page" }).status(200);
});

app.get("/login", (req, res) => {
  res.send({ message: "Login page" }).status(200);
});

app.get("/register", (req, res) => {
  res.send({ message: "Registration page" }).status(200);
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.get("/secrets", (req, res) => {
  if (req.isAuthenticated()) {
    res.send({ message: "You got my secret" });
  } else {
    res.redirect("/login");
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  })
);

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM user WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      // User already exists
      res.redirect("/login");
    } else {
      // Register user in database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password: ", err);
        } else {
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2)",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) => {
            console.log("success");
            res.redirect("/secrets");
          });
        }
      });
    }
  } catch (err) {
    console.error(err);
  }
});

passport.use(
  "local",
  new Strategy(async function verify(username, password, cb) {
    // Verify user from stored username and password
    try {
      // Get user details from database using username
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
        username,
      ]);

      // If user exists, compare the provided password with the stored hashed password
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;

        // Compare stored hashed password against given password
        bcrypt.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            // Error with password check
            console.log("Error comparing passwords: ", err);
            return cb(err);
          } else {
            if (valid) {
              // Passed password check
              return cb(null, user);
            } else {
              // Did not pass password check
              return cb(null, false);
            }
          }
        });
      } else {
        return cb("User not found");
      }
    } catch (err) {
      console.err(err);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
