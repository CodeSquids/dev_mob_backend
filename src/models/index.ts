import { sequelize } from "../config/init";
import { Enseignant } from "./db.model";

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