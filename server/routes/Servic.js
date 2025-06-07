const express = require('express');
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
