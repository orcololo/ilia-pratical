require('dotenv').config();
const frisby = require('frisby');
const baseURL = `http://localhost:80/movies/translations`;

it('all other endpoits must be 404:', () => {
  return frisby.get(baseURL).expect('status', 404);
});

it('should properly handle unknown resources from TMDB and return an error message.', () => {
  return frisby
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
      expect(json.translations[0].data.title).toBe('Батман завинаги');
    });
});

it('when searching for a resource from the second time, it must be returned directly from the db.', async () => {
  await frisby
    .get(`${baseURL}/414`)
    .expect('status', 200)
    .then((response) => {
      const { json } = response;
      expect(json.id).toBe(414);
      expect(json.translations[0].data.title).toBe('Батман завинаги');
    });
});
