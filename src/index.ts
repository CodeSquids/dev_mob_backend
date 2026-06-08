import express, { type Request, type Response } from 'express'
import cors from 'cors'
import { initModels } from './models/index'
import dotenv from 'dotenv'
import enseignantsRoutes from "./routes/enseignant.route"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/enseignants", enseignantsRoutes)
app.get("/", (req, res) => {
  res.json({ message: "Root endpoint working" });
})

app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Route not found"
  })
})

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;
