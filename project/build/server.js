"use strict";

var express = require('express');
var app = express();
var userRoutes = require('./routes/user');
var _require = require('./models'),
  sequelize = _require.sequelize;
require('dotenv').config();
app.use(express.json());
app.use('/user', userRoutes);
var PORT = process.env.PORT || 3000;
sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
  });
});