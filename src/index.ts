import express, { type Request, type Response } from 'express'
import cors from 'cors'
import { initModels } from './models/index.ts'
import dotenv from 'dotenv'
import enseignantsRoutes from "./routes/enseignant.route.ts"

dotenv.config()
const PORT = Number(process.env.PORT)
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/enseignants", enseignantsRoutes)

// Test route at root
app.get("/", (req, res) => {
  res.json({ message: "Root endpoint working" });
})

app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Route not found"
  })
})

async function start() {
  try {
    await initModels()
    app.listen(PORT, () => {
      console.log("Server running on port ", PORT)
    })
  } catch (error) {
    console.error("Failed to start server:", error)
    process.exit(1)
  }
}

start()
