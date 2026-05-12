// controllers/scraperController.js
const path = require('path');
const fs = require('fs').promises; 
const cheerio = require('cheerio');
const Scraper = require('../services/scraperService');

async function obtenerDatos(req, res) {
    try {
        const ruta = path.join(__dirname, '../catalogos/catalogo.html');
        const html = await fs.readFile(ruta, 'utf-8');
        
        // 1. Cargar el HTML con Cheerio
        const $ = cheerio.load(html);

        // 2. TAREA 2: AGREGAR ESTA VALIDACIÓN REQUERIDA
        if ($('.producto').length === 0) {
            return res.status(400).json({
                ok: false,
                error: 'No se encontraron elementos .producto en el HTML'
            });
        }

        // 3. Si pasa la validación, llamamos al servicio para procesar
        const datos = await Scraper.procesarHTML(html);
        
        res.status(200).json({ 
            ok: true, 
            conteo: datos.length, 
            data: datos 
        });

    } catch (error) {
        res.status(500).json({ 
            ok: false, 
            error: "Error interno al procesar el archivo" 
        });
    }
}

module.exports = { obtenerDatos };