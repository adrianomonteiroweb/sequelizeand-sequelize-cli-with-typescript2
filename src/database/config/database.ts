import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  username: 'postgres',
  password: 'dev',
  database: 'sequelize',
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});
