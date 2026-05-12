// services/scraperService.js 
const cheerio = require('cheerio');
const fs = require('fs').promises;

async function procesarArchivoLocal(ruta) {
    try {
        const html = await fs.readFile(ruta, 'utf-8'); // [cite: 23]
        const $ = cheerio.load(html); // [cite: 13, 95]
        const resultados = [];

        $('.producto').each(function() { // [cite: 19, 96]
            resultados.push({
                nombre: $(this).find('.nombre').text().trim(), // Dato 1 [cite: 17, 98]
                precio: parseInt($(this).find('.precio').text()), // Dato 2 [cite: 19]
                categoria: $(this).find('.categoria').text().trim() // Dato 3 [cite: 34]
            });
        });

        if (resultados.length === 0) throw new Error("No se encontraron productos"); // [cite: 135]
        return resultados;
    } catch (error) {
        throw error; // [cite: 34, 136]
    }
}

module.exports = { procesarArchivoLocal };