// routes/catalogoRoutes.js
const express = require('express');
const router = express.Router();
const ScraperCtrl = require('../controllers/scraperController');

router.get('/scrape', Ctrl.obtenerDatos);
module.exports = router;