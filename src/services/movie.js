const { Movie } = require("../models/Movie");

async function getAllMovies() {
  const movies = await Movie.find().lean();
  return movies;
}

async function getMovieById(id) {
  return null
  // const movies = await readFile();

  // const movie = movies.find((m) => m.id == id);
  // return movie ? toMovieModel(movie) : movie;
}

async function createMovie(movieData) {
  
  // const id = uuid();
  // const movie = {
  //   id,
  //   title: movieData.title,
  //   genre: movieData.genre,
  //   director: movieData.director,
  //   year: Number(movieData.year),
  //   imageURL: movieData.imageURL,
  //   rating: Number(movieData.rating),
  //   description: movieData.description
  // };

  // const movies = await readFile();
  // movies.push(movie);
  // await writeFile(movies);

  // return toMovieModel(movie);
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie
};
