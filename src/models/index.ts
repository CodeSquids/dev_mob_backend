import { sequelize } from "../config/init.ts";
import { Enseignant } from "./db.model.ts";

export const initModels = async() => {
  try {
    await sequelize.authenticate()
    console.log("DB connected")

    await sequelize.sync()
    console.log("Models set")
  } catch (error) {
    console.error("DB error: ", error)
  }
}