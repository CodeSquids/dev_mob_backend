// import { sequelize } from "../config/init";
import { Enseignant } from "./db.model";
import { getSequelize } from "../config/db";
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

export const initModels = async () => {
  const sequelize = getSequelize();

  try {
    await sequelize.authenticate()
    console.log("DB connected")

    if (process.env.NODE_ENV !== "production") {
      await sequelize.sync();
    }
    console.log("Models set")
  } catch (error) {
    console.error("DB error: ", error)
  }
}