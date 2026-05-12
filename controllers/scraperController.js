// controllers/scraperController.js 
const path = require('path');
const Scraper = require('../services/scraperService');

async function getScrape(req, res) {
    try {
        const ruta = path.join(__dirname, '../catalogos/catalogo.html'); // [cite: 24, 34]
        const datos = await Scraper.procesarArchivoLocal(ruta);
        res.json({ ok: true, total: datos.length, data: datos }); // [cite: 34, 121]
    } catch (error) {
        res.status(500).json({ ok: false, error: error.message }); // [cite: 34, 136]
    }
}

module.exports = { getScrape };