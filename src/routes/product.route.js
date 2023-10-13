const express = require('express');
const { getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');

const productRoute = express.Router();

productRoute.get('/product',getProduct);
productRoute.post('/product',createProduct);
productRoute.put('/product/:id',updateProduct);
productRoute.delete('/product/:id',deleteProduct);

module.exports = productRoute;