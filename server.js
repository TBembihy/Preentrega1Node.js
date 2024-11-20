const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

const productRoutes = require('./routes/products');

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
