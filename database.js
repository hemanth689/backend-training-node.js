//Implementation of users database using sequelize.
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('usertest', 'postgres', 'gammastack', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

export default sequelize;
