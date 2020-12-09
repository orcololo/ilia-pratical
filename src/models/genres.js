const mongoose = require('mongoose');

const { Schema } = mongoose;

const genresSchema = new Schema({
  name: String,
  slug: String,
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movies',
    },
  ],
});

module.exports = mongoose.model('Genres', genresSchema);
