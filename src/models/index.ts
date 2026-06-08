// import { sequelize } from "../config/init";
import { Enseignant } from "./db.model";
import { getSequelize } from "../config/db";

export const initModels = async() => {
  const sequelize = getSequelize();
  
  try {
    await sequelize.authenticate()
    console.log("DB connected")

    await sequelize.sync()
    console.log("Models set")
  } catch (error) {
    console.error("DB error: ", error)
  }
}