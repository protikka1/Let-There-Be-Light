const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');

beforeAll(async () => {
  // You can mock or use a real test DB connection
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('POST /api/services', () => {
  it('should create a new service request', async () => {
    const res = await request(app)
      .post('/api/services')
      .send({
        name: 'Jane Doe',
        email: 'jane@example.com',
        type: 'Housing',
        message: 'I need help finding housing.'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.email).toBe('jane@example.com');
  });
});
