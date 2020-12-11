const Movies = require('../models/movies');
const { getMovieInfo } = require('../services/theMovieDb');

exports.getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const isMovieOnDb = await Movies.findOne({ id });
    if (!isMovieOnDb) {
      const info = await getMovieInfo(id);
      const newMovie = await Movies.create(info);
      return res.status(201).json(newMovie);
    }
    return res.status(200).json(isMovieOnDb);
  } catch (error) {
    return res.json(error);
  }
};
