// test.ts
import mongoose from 'mongoose';
import { addMovie, getMovies, getMovieById, updateMovieById, deleteMovie } from '../routes/movies';

const main = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/TP_MongoMovies');

  // CREAR
  const nuevaPelicula = {
    titulo: "Inception",
    director: "Christopher Nolan",
    anio: 2010,
    duracion: 148,
    genero: "Ciencia ficción",
    calificacion: 9
  };
  const movieCreada = await addMovie(nuevaPelicula);
  console.log("Pelicula creada:", movieCreada);

  // LEER TODAS
  const peliculas = await getMovies();
  console.log("Películas:", peliculas);

  // LEER UNA
  if (movieCreada?._id) {
    await getMovieById(movieCreada._id.toString());
  }

  // ACTUALIZAR
  if (movieCreada?._id) {
    await updateMovieById(movieCreada._id.toString());
  }

  // ELIMINAR
  if (movieCreada?._id) {
    await deleteMovie(movieCreada._id.toString());
  }

  await mongoose.disconnect();
};

main();

