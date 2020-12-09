const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  original_id: { type: Number },
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
  genres: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Genres',
    },
  ],
  production_companies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductionCompanies',
    },
  ],
  production_countries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductionCountries',
    },
  ],
  spoken_languages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SpokenLanguages',
    },
  ],
  translations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Translation',
    },
  ],
});

module.exports = mongoose.model('Movies', movieSchema);
