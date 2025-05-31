const validateEmail = require('../utils/validateEmail');

test('Valid email should return true', () => {
  expect(validateEmail('test@example.com')).toBe(true);
});

test('Invalid email should return false', () => {
  expect(validateEmail('invalid-email')).toBe(false);
});


