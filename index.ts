import express from 'express';
import dotenv from 'dotenv';
import movieRoutes from './routes/movies';
import { connectDB } from './config/mongo';

dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/movies', movieRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
