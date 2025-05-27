"use strict";

var _require = require('sequelize'),
  Sequelize = _require.Sequelize;
var config = require('../config/config').development;
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./user')(sequelize, Sequelize);
module.exports = db;