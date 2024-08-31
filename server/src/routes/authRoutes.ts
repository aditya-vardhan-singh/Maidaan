// src/routes/authRoutes.ts
import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  // Login logic here
  res.send('Login route');
});

router.post('/register', (req, res) => {
  // Registration logic here
  res.send('Register route');
});

export default router;