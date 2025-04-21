import express from 'express'
import dotenv from 'dotenv'
import movieRoutes from './routes/movies'
import mongoose from 'mongoose'
import { connectDB } from './database' // corregir por ./config/mongo.ts?
connectDB()

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/movies', movieRoutes)

// tiene algun sentido la ubicacion ? connectDB() 

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
