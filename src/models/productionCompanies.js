const mongoose = require('mongoose');

const { Schema } = mongoose;

const productionCompaniesSchema = new Schema({
  name: { type: String },
  logoPath: { type: String },
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movies',
    },
  ],
});

module.exports = mongoose.model(
  'ProductionCompanies',
  productionCompaniesSchema
);
