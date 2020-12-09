const mongoose = require('mongoose');

const { Schema } = mongoose;

const spokenLanguagesSchema = new Schema({
  iso_639_1: {
    type: String,
  },
  name: {
    type: String,
  },
  english_namme: {
    type: String,
  },
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movies',
    },
  ],
});

module.exports = mongoose.model('SpokenLanguage', spokenLanguagesSchema);
