const { greet, add } = require('../utils');

test('greet returns correct message', () => {
  expect(greet('Akeem')).toBe('Hello, Akeem!');
});

test('add returns correct sum', () => {
  expect(add(2, 5)).toBe(7);
});
