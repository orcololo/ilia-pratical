const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  adult: {
    type: Boolean,
  },
  backdrop_path: {
    type: String,
  },
  belongs_to_collection: {
    id: { type: Number },
    name: { type: String },
    poster_path: { type: String },
    backdrop_path: { type: String },
  },
  budget: {
    type: Number,
  },
  genres: [
    {
      id: Number,
      name: String,
    },
  ],
  homepage: {
    type: String,
  },
  id: {
    type: Number,
  },
  imdb_id: {
    type: String,
  },
  original_language: {
    type: String,
  },
  original_title: {
    type: String,
  },
  overview: {
    type: String,
  },
  popularity: {
    type: Number,
  },
  poster_path: {
    type: String,
  },
  production_companies: [
    {
      id: Number,
      logo_path: Object,
      name: String,
      origin_country: String,
    },
  ],
  production_countries: [
    {
      iso_3166_1: String,
      name: String,
    },
  ],
  release_date: {
    type: Date,
  },
  revenue: {
    type: Number,
  },
  runtime: {
    type: Number,
  },

  spoken_languages: [
    {
      iso_639_1: String,
      name: String,
    },
  ],
  status: {
    type: String,
  },
  tagline: {
    type: String,
  },
  title: {
    type: String,
  },
  video: {
    type: Boolean,
  },
  vote_average: {
    type: Number,
  },
  vote_count: {
    type: Number,
  },
  translations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Translations',
    },
  ],
});

module.exports = mongoose.model('Movies', movieSchema);
