"use strict";

const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const {
  sequelize
} = require('./models');
require('dotenv').config();
app.use(express.json());
app.use('/user', userRoutes);
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});