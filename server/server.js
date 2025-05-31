const express = require('express');
dev
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();7
7mongoose.connect(process.env.MONGO_URL, {
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/services', require('./routes/services'));

module.exports = app; // ✅ Only export app — no listen

const router = express.Router();
const Service = require('../models/Service');

// POST new service request
router.post('/', async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).send(service);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
main
