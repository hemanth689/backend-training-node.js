// models/index.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
  }
);

// Dynamically import all models
const models = {};

export async function loadModels() {
  const files = fs.readdirSync(__dirname);

  for (const file of files) {
    if (
      file !== 'index.js' &&
      file.endsWith('.js')
    ) {
      const { default: defineModel } = await import(path.join(__dirname, file));
      const model = defineModel(sequelize);
      models[model.name] = model;
    }
  }

  return { sequelize, models };
}
