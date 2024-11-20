const express = require('express');
const router = express.Router();

let carts = [
    { id: 1, products: [] },
];

router.get('/', (req, res) => {
    res.json(carts);
});

router.get('/:id', (req, res) => {
    const cartId = parseInt(req.params.id);
    const cart = carts.find((c) => c.id === cartId);

    if (!cart) {
        return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    res.json(cart);
});

router.post('/', (req, res) => {
    const newCart = { id: carts.length + 1, products: [] };
    carts.push(newCart);

    res.status(201).json(newCart);
});

router.post('/:id/products', (req, res) => {
    const cartId = parseInt(req.params.id);
    const cart = carts.find((c) => c.id === cartId);

    if (!cart) {
        return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    const product = req.body;
    cart.products.push(product);

    res.status(201).json(cart);
});

router.delete('/:id', (req, res) => {
    const cartId = parseInt(req.params.id);
    carts = carts.filter((c) => c.id !== cartId);

    res.status(204).send();
});

module.exports = router;
