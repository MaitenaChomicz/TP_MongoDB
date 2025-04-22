import { Router } from 'express'
import { Movie, IMovie } from '../models/Movie'

const router = Router()

// CREAR: Agregar una nueva película
const addMovie = async (newMovie: object) => {
  try {
    const movie: IMovie = new Movie(newMovie)
    return await movie.save()
  } catch (error) {
    console.log("Error al agregar película X || ", error)
  }
}

//READ I: Obtener todas las películas
const getMovies = async () => {
  try {
    const movies = await Movie.find()
    return movies
  } catch (error) {
    console.log("Error al buscar las películas X || ", error)
  }
}

//READ II: Obtener 1 película (por su ID)
const getMovieById = async (id: string) => {
  try {
    const movie = await Movie.findById(id);

    if (!movie) {
      console.log("No existe la película X");
    } else {
      console.log(movie);
    }
  } catch (error) {
    console.log("Error al buscar la película X || ", error);
  }
};

//UPDATE: Actualizar una película
const updateMovieById = async (id: string) => {
  const updatedMovie = await Movie.findByIdAndUpdate(
    id,
    { calificacion: 10 },
    { new: true }
  );
  console.log(" Calificación actualizada:", updatedMovie);
};

//DELETE: Eliminar una película (por su ID)
const deleteMovie = async (id: string) => {
  const deletedMovie = await Movie.findByIdAndDelete(id);
  console.log(" Pelicúla eliminada:", deletedMovie);
};

export { addMovie, getMovies, getMovieById, updateMovieById, deleteMovie };

export default router
