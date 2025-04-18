import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI_DB as string)
    console.log(':) Conectado a MongoDB')
  } catch (error) {
    console.error('X Error al conectar con MongoDB:', error)
    process.exit(1)
  }
}
