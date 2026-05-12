// services/scraperService.js
const cheerio = require('cheerio');
const fs = require('fs').promises;

async function procesarHTML(ruta) {
    try {
        const html = await fs.readFile(ruta, 'utf-8');
        if (!html) throw new Error("El archivo HTML está vacío"); // Validación [cite: 135]

        const $ = cheerio.load(html);
        const productos = [];

        $('.producto').each((i, el) => {
            const nombre = $(el).find('.nombre').text().trim();
            const precio = parseInt($(el).find('.precio').text());
            const categoria = $(el).find('.categoria').text().trim();

            // Solo agrega si los datos son válidos [cite: 135]
            if (nombre && !isNaN(precio)) {
                productos.push({ nombre, precio, categoria });
            }
        });

        return productos;
    } catch (error) {
        throw error;
    }
}

module.exports = { procesarHTML };