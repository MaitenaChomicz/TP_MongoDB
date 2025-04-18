import { Router } from 'express'
import { Movie } from '../models/Movie'

const router = Router()

// Obtener todas las películas
router.get('/', async (_req, res) => {
  const movies = await Movie.find()
  res.json(movies)
})

// Agregar una nueva película
router.post('/', async (req, res) => {
  const nuevaPeli = new Movie(req.body)
  await nuevaPeli.save()
  res.status(201).json(nuevaPeli)
})

export default router
