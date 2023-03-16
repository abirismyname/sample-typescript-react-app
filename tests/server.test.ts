import request from 'supertest';
import app from '../src/server';

describe('Server', () => {
  it('should return 200 on GET /', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
