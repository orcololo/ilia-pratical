const Movies = require('../models/movies');
const { getMovieInfo } = require('../services/theMovieDb');

exports.getAllMovies = async (_req, res) => {
  const resp = await Movies.find();
  resp.length === 0
    ? res.json({ error: 'No records found' }).status(404)
    : res.json({ resp }).status(200);
};

exports.getMovieById = async (req, res) => {
  const { id } = req.params;
  const check = await Movies.findOne({ original_id: id });
  if (!check) {
    const info = await getMovieInfo(id);
    return res.json(info);
  }
};
