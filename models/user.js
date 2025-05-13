import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,   //datatype is string.
    allowNull: false,         //null values are not allowed.
    unique: true              //all the values should be unique.
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
  //change the tablename as well, Otherwise it takes tablename as modelname.
  tableName: 'users'
});

export default User;