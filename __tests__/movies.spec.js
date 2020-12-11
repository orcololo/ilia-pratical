require('dotenv').config();
const frisby = require('frisby');
const { HTTP_PORT } = process.env;
const baseURL = `http://localhost:${port}/movies`;
const port = HTTP_PORT || 8080;
const mongoConnection = require('mongoose');
const db_url = `mongodb://localhost:27017/ilia`;

const options = {
  useNewUrlParser: true,
  connectTimeoutMS: 10000,
  useUnifiedTopology: true,
};

beforeAll(async () => {
  await mongoConnection.connect(db_url, options);
  await mongoConnection.connection.dropDatabase();
  await mongoConnection.connection.close();
});

it('all other endpoits must be 404:', async () => {
  await frisby.get(`${baseURL}/fjawifhaowf`).expect('status', 404);
});

it('should properly handle unknown resources from TMDB and return an error message.', async () => {
  await frisby
    .get(`${baseURL}/23`)
    .expect('status', 404)
    .expect('json', { error: 'Resource not found' });
});

it('when searching for a resource for the first time, it must be saved to DB and then, returned.', async () => {
  await frisby
    .get(`${baseURL}/414`)
    .expect('status', 201)
    .then((response) => {
      const { json } = response;
      expect(json.id).toBe(414);
      expect(json.original_title).toBe('Batman Forever');
    });
});

it('when searching for a resource from the second time, it must be returned directly from the db.', async () => {
  await frisby
    .get(`${baseURL}/414`)
    .expect('status', 200)
    .then((response) => {
      const { json } = response;
      expect(json.id).toBe(414);
      expect(json.original_title).toBe('Batman Forever');
    });
});
