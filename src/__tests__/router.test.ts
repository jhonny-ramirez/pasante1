
import request from 'supertest';
import express from 'express';
import testRouter from '../router'; 

const app = express();
app.use('/test', testRouter);

describe('Test Router', () => {
  it('should respond with JSON data from the API', async () => {
    const response = await request(app).get('/test');
    
    expect(response.status).toBe(200);

    const expectedResponse = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      // ... otras propiedades
    };
    expect(response.body).toMatchObject(expectedResponse);
  });

});
