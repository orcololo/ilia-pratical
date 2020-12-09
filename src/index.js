require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { getMovieInfo } = require('./services/theMovieDb');
const Translation = require('./models/translations');
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
app.use(express.json());
mongoose.connect(url, options).catch((error) => console.log(error));

app.get('/', (req, res) => {
  res.json({
    msg: 'LOL',
  });
});

app.post('/newTranslation', async (req, res) => {
  const translation = new Translation(req.body);
  const resp = await translation.save();
  res.json(resp);
});

app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const resp = await getMovieInfo(id);
  res.json(resp);
});

const port = HTTP_PORT || 8080;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
