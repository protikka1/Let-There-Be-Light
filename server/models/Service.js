const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  email: String,
  type: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', serviceSchema);
