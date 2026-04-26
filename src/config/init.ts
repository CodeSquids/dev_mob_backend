import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USERNAME!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOSTNAME!,
    dialect: (process.env.DB_DIALECT!) as 'mysql',
  }
)