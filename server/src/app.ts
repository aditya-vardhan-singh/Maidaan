import express from 'express';
import cors from 'cors';
import { initPassport, initAuthRoutes } from './services/authService';  
import tournamentServices from './services/tournamentService'
// import userRoutes from './services/userService';  
// import organizerRoutes from './services/organizerService';  

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


initPassport(app);

// Routes
app.use('/auth', initAuthRoutes());
app.use('/api/v1', tournamentServices)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
