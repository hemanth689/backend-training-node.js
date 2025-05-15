const { Sequelize } = require('sequelize');
const config = require('../config/config.js').development;
const UserModel = require('./user');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = UserModel(sequelize, Sequelize);

module.exports = db;
