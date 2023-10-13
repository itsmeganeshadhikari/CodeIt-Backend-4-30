const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: String,
        minlength: [10, 'Too short description'],
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }
});
const Product = mongoose.model('Product', productSchema)
module.exports = Product;