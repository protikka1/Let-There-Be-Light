const request = require('supertest');
const express = require('express');
const app = express();
app.get('/test', (req, res) => res.status(200).send('ok'));

test('GET /test should return ok', async () => {
  const res = await request(app).get('/test');
  expect(res.statusCode).toEqual(200);
  expect(res.text).toBe('ok');
});
