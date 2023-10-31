const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'to short name'],
        maxlength: [55, ' To long name'],
        required: true,
        trim: true,
    },
    offers: {

    },
    reviews: {

    },
    aggregateRating: {

    },
})

const product = mongoose.model('product', productSchema);
module.exports = product