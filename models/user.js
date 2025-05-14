// models/user.js
import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,                 //datatype is string.
      allowNull: false,                       //null values are not allowed.
      unique: true                            //all the values should be unique.
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    education: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users'
  });

  return User;
};
