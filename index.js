import express from 'express';
import sequelize from './database.js';
import userRoutes from './routes/userRoutes.js';
//import User from './models/user.js';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

// Sync database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  const port = 3000;
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
});
