const express = require('express');
const { getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');
const productRoute = express.Router();

productRoute.get('/product', getProduct);
productRoute.post('/product', createProduct);
productRoute.put('/product', updateProduct);
productRoute.delete('/product', deleteProduct);

module.exports = productRoute;