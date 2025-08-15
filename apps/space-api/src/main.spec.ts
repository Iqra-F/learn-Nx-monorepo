import request from 'supertest';
import app from './main';

describe('space-api endpoints', () => {
  it('GET /api returns welcome message', async () => {
    const res = await request(app).get('/api');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Assalam o alaikum! Welcome to space-api!');
  });

  it('GET /api/hello returns hello message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello from space-api!');
  });

  it('GET /api/greet?name=Ali returns greeting', async () => {
    const res = await request(app).get('/api/greet?name=Ali');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Ali!');
  });
});
