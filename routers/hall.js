const express = require('express');
const router = express.Router();
const HallController = require('../controllers/hallController');
const refresh = require('./refresh');

router.get('/', HallController.getHall);

module.exports = router;