const request = require('supertest');
const app = require('./app'); 

describe('GET /terminator', () => {
  it('returns "Hasta la vista, baby" with a 201 status code', async () => {
    const response = await request(app).get('/terminator');
    
    
    expect(response.status).toBe(201);
    expect(response.text).toBe('Hasta la vista, baby');
  });
});
