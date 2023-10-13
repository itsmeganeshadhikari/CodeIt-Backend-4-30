const { default: mongoose } = require("mongoose")
const dotenv = require('dotenv').config()
var debug = require('debug')('http')

const db_connect = async () => {
  try {
    const conn = await mongoose.connect(encodeURI(process.env.DB_SERVER), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Database is connected");
    return conn;
  } catch (error) {
    debug('error')
  }
}

module.exports = db_connect;