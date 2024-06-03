const { getMovieById, attachCastToMovie } = require("../services/movie");
const { getAllCast } = require("../services/cast");

module.exports = {
  attachGet: async (req, res) => {
    const id = req.params.id;
    const movie = await getMovieById(id).lean();

    if (!movie) {
      res.render("404");
      return;
    }
    const allCast = await getAllCast();

    res.render("cast-attach", { movie, allCast });
  },
  attachPost: async (req, res) => {
    const movieId = req.params.id;
    const castId = req.body.cast;

    if (!movieId || !castId) {
      res.status(400).end();
      return;
    }

    if (castId == "none") {
      const movie = await getMovieById(movieId);
      const allCast = await getAllCast();
      res.render("cast-attach", { movie, allCast, error: true });

      return;
    }
    const movie = await getMovieById(movieId, true);
    await attachCastToMovie(await movieQuery, castId);

    res.redirect("/details/" + movieId);
  },
};
