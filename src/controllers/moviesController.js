const Movies = require('../models/movies');

exports.getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const isMovieOnDb = await Movies.findOne({ id });
    console.log(isMovieOnDb);
    if (!isMovieOnDb) {
      const newMovie = await Movies.create(req.data);
      return res.status(201).json(newMovie);
    }
    return res.status(200).json(isMovieOnDb);
  } catch (error) {
    return res.json(error);
  }
};
