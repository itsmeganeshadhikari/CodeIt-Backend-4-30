const { default: mongoose } = require("mongoose");

exports.createConnection = async() =>{
    const connection =  await mongoose.createConnection('mongodb://localhost:27017/ecommerce') //localhost connection method
    return connection;
}