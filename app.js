// app.js
import express from 'express';
import { loadModels } from './models/index.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());

const { sequelize, models } = await loadModels();
app.use('/users', userRoutes(models));

//Sync the database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  const port = 3000;
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
});
