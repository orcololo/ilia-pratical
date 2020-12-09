const mongoose = require('mongoose');

const { Schema } = mongoose;

const genresSchema = new Schema({
  name: { type: String },
  slug: { type: String },
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movies',
    },
  ],
});

module.exports = mongoose.model('Genres', genresSchema);
