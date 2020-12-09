const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  adult: {type: Boolean},
  backdrop_path: {type: String},
  belongs_to_collection: {
    id: {type: Number},
    name: {type: String},
    poster_path: {type: String},
    backdrop_path: {type: String},
  },
  budget: {type: Number},
  genres: {type: [String]},
  homepage: {type: String},
  id: {type: Number},
  imdb_id: {type: String},
  original_language: {type: String},
  original_title: {type: String},
  overview: {type: String},
  "popularity": 31.373,
  "poster_path": "/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
  "production_companies": [
    {
      "id": 14,
      "logo_path": "/m6AHu84oZQxvq7n1rsvMNJIAsMu.png",
      "name": "Miramax",
      "origin_country": "US"
    },
    {
      "id": 59,
      "logo_path": "/yH7OMeSxhfP0AVM6iT0rsF3F4ZC.png",
      "name": "A Band Apart",
      "origin_country": "US"
    },
    {
      "id": 39121,
      "logo_path": null,
      "name": "Super Cool ManChu",
      "origin_country": ""
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2003-10-10",
  "revenue": 180899045,
  "runtime": 111,
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    },
    {
      "english_name": "Japanese",
      "iso_639_1": "ja",
      "name": "日本語"
    },
    {
      "english_name": "French",
      "iso_639_1": "fr",
      "name": "Français"
    }
  ],
  "status": "Released",
  "tagline": "A roaring rampage of revenge.",
  "title": "Kill Bill: Vol. 1",
  "video": false,
  "vote_average": 8,
  "vote_count": 12533
}
})