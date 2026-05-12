// server.js [cite: 37]
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api', require('./routes/catalogoRoutes'));

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));