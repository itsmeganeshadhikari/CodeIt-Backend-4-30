const product = require("../models/Product");

exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const insertData = await newProduct.save()
        res.status(200).send({ status: 'success', data: insertData })

    } catch (error) {
        res.send({ error: error })

    }
}

exports.getProduct = (req, res) => {
    res.send({ data: "Get Product" })
}

exports.updateProduct = (req, res) => {
    console.log('update Product');
}

exports.deleteProduct = () => {
    console.log('Delete product');
}