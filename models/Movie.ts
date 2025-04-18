import { Schema, model, Document } from 'mongoose'

export interface IMovie extends Document {
  titulo: string
  director: string
  anio: number
  duracion: number
  genero: string
  calificacion: number
}

const MovieSchema = new Schema<IMovie>({
  titulo: { type: String, required: true },
  director: { type: String, required: true },
  anio: { type: Number, required: true },
  duracion: { type: Number, required: true },
  genero: { type: String, required: true },
  calificacion: { type: Number, required: true }
})

export const Movie = model<IMovie>('Movie', MovieSchema)
