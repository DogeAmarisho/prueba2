// routes/catalogoRoutes.js
const express = require('express');
const router = express.Router();
const ScraperCtrl = require('../controllers/scraperController');

// Define el endpoint que pide la evaluación (GET /scrape) [cite: 121, 134]
router.get('/scrape', ScraperCtrl.getScrape);

module.exports = router;