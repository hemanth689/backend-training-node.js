//Implementation of users database using sequelize.
import { Sequelize } from 'sequelize';
//importing .env file for using credentials.
import dotenv from 'dotenv';
dotenv.config();

const dbName = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const sequelize = new Sequelize(dbName, username, password, {
  host: host,
  dialect: 'postgres',
  logging: false
});

export default sequelize;
