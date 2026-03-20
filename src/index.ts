import express from 'express'
import { initModels } from './models/index.ts'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

const app = express()

app.use(express.json())

async function start() {
  await initModels()

  app.listen(process.env.PORT, ()=> {
    console.log("Server running on port ",process.env.PORT)
  })
}

start()