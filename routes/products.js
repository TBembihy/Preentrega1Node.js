const express = require('express');
const router = express.Router();

let products = [
    { id: 1, title: 'Remera', description: 'Remera deportiva', code: 'ABC123', price: 20, status: true, stock: 10, category: 'Ropa', thumbnails: [] },
    { id: 2, title: 'Pantalón', description: 'Pantalón deportivo', code: 'DEF456', price: 40, status: true, stock: 5, category: 'Ropa', thumbnails: [] },
];

router.post('/', (req, res) => {
    const { title, description, code, price, stock, category, thumbnails } = req.body;

    if (!title || !description || !code || !price || !stock || !category) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios, excepto thumbnails' });
    }

    const existingCode = products.some((product) => product.code === code);
    if (existingCode) {
        return res.status(400).json({ error: 'El código del producto ya existe' });
    }
    const newProduct = {
        id: products.length + 1,
        title,
        description,
        code,
        price,
        status: true,
        stock,
        category,
        thumbnails: thumbnails || [],
    };

    products.push(newProduct);

    res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });
});

module.exports = router;
