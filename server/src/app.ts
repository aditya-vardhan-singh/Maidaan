// app.ts
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import organizerRoutes from './routes/organizerRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/organizers', organizerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;