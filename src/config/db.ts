import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

let sequelize: Sequelize | null = null;

export function getSequelize() {
  if (!sequelize) {
    sequelize = new Sequelize(
      process.env.DB_NAME!,
      process.env.DB_USERNAME!,
      process.env.DB_PASSWORD!,
      {
        host: process.env.DB_HOSTNAME,
        port: Number(process.env.DB_PORT),
        dialect: (process.env.DB_DIALECT!) as 'mysql',
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        }
      }
    );
  }

  return sequelize;
}