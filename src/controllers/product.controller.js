const Product = require('../models/Product');

exports.createProduct = async(req,res) =>{
    try {
        const newProduct = new Product(req.body);
        const insertData = await newProduct.save();
        res.status(200).send({status:"success",data:insertData})
    } catch (error) {
        
    }

}

exports.getProduct = () => {

}


exports.updateProduct = () => {

}

exports.deleteProduct = () => {

}