"use strict";

const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    mobileNo: DataTypes.STRING,
    address: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: DataTypes.STRING
  });
  const saltRounds = 10;
  User.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.password, saltRounds);
  });
  return User;
};