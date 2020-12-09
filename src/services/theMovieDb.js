require('dotenv').config();
const api = require('./api');

const { THEMOVIEDB_API_KEY } = process.env;

const getMovieInfo = async (id) => {
  console.log('fui chamado!');
  try {
    const resp = await api.get(`movie/${id}?api_key=${THEMOVIEDB_API_KEY}`);
    return resp.data;
  } catch (error) {
    return error;
  }
};

const getMoviesTranslations = async (id) => {
  try {
    const resp = await api.get(
      `movie/${id}/translations?api_key=${THEMOVIEDB_API_KEY}`
    );
    return resp.data;
  } catch (error) {
    return error;
  }
};

module.exports = { getMovieInfo, getMoviesTranslations };
