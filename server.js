// server.js [cite: 37]
const express = require('express');
const app = express();
app.use(express.json());

app.use('/api', require('./routes/catalogoRoutes')); // [cite: 37]

app.listen(3000, () => console.log('Servidor en http://localhost:3000')); // [cite: 37, 55]