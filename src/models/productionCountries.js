const mongoose = require('mongoose');

const { Schema } = mongoose;

const productionCountriesSchema = new Schema({
  iso_3166_1: { type: String },
  name: { type: String },
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movies',
    },
  ],
});

module.exports = mongoose.model(
  'Production_countries',
  productionCountriesSchema
);
