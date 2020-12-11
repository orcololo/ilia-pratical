require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const moviesRoutes = require('./routes/movies.routes');
const translationsRoutes = require('./routes/translations.routes');
const { handleApi } = require('./middlewares/apiHandler');

const {
  MONGO_DB,
  MONGO_HOSTNAME,
  MONGO_PASSWORD,
  MONGO_USERNAME,
  MONGO_PORT,
  HTTP_PORT,
} = process.env;

const options = {
  useNewUrlParser: true,
  connectTimeoutMS: 10000,
  useUnifiedTopology: true,
};

const url = `mongodb://localhost:27017/ilia`;

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
mongoose
  .connect(url, options)
  .then(() => console.log(`Mongo is runing on port ${MONGO_PORT}`))
  .catch((error) => console.log(error));

app.use('/movies', handleApi, moviesRoutes);
app.use('/movies/translations', handleApi, translationsRoutes);
app.use('*', (_req, res) => res.status(404).json({ message: 'Oops!' }));

const port = HTTP_PORT || 8080;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
