import express from 'express';
import cors from 'cors';
import { initPassport, initAuthRoutes } from './services/authService';  
// import userRoutes from './services/userService';  
// import organizerRoutes from './services/organizerService';  

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Passport for authentication
initPassport(app);

// Routes
app.use('/auth', initAuthRoutes());  // Use auth routes with '/auth' prefix
// app.use('/users', userRoutes);       // Use user routes with '/users' prefix
// app.use('/organizers', organizerRoutes);  // Use organizer routes with '/organizers' prefix

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
