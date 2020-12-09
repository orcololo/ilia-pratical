const mongoose = require('mongoose');

const { Schema } = mongoose;

const translationSchema = new Schema({
  iso_3166_1: {
    type: String,
  },
  iso_639_1: {
    type: String,
  },
  name: {
    type: String,
  },
  english_namme: {
    type: String,
  },
  data: {
    homepage: {
      type: String,
    },
    overview: {
      type: String,
    },
    runtime: { type: Number },
    tagline: { type: String },
    title: { type: String },
  },
  // belongs: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Movie',
  // },
});

module.exports = mongoose.model('Translation', translationSchema);