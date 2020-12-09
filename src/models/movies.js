const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  adult: { type: Boolean },
  backdrop_path: { type: String },
  belongs_to_collection: {
    id: { type: Number },
    name: { type: String },
    poster_path: { type: String },
    backdrop_path: { type: String },
  },
  budget: { type: Number },
  homepage: { type: String },
  id: { type: Number },
  imdb_id: { type: String },
  original_language: { type: String },
  original_title: { type: String },
  overview: { type: String },
  popularity: { type: Number },
  poster_path: { type: String },
  release_date: { type: Date },
  revenue: { type: Number },
  runtime: { type: Number },
  status: { type: String },
  tagline: { type: String },
  title: { type: String },
  video: { type: Boolean },
  vote_average: { type: Number },
  vote_count: { type: Number },
  genres: { type: [String] },
  production_companies: { type: String },
  production_countries: { type: String },
  spoken_languages: { type: String },
});

module.exports = mongoose.model('Movies', movieSchema);
