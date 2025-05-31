const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();7
7mongoose.connect(process.env.MONGO_URI, {
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/services', require('./routes/services'));

module.exports = app; // ✅ Only export app — no listen
