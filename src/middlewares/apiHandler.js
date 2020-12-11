const {
  getMovieInfo,
  getMoviesTranslations,
} = require('../services/theMovieDb');

const handlePath = async (path, id) => {
  if (path === 'movies') {
    const resp = await getMovieInfo(id);
    return resp;
  }
  if (path === 'translations') {
    const resp = await getMoviesTranslations(id);
    return resp;
  }
};

exports.handleApi = async (req, res, next) => {
  const split = req.originalUrl.split('/');
  const id = split.pop();
  const path = split[split.length - 1];
  try {
    const result = await handlePath(path, id);
    if (result.success === false)
      return res.status(404).json({ error: 'Resource not found' });
    req.data = result;
    next();
  } catch (error) {
    return error;
  }
};
