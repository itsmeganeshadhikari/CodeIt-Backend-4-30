const { default: mongoose } = require("mongoose")
const dotenv = require('dotenv').config()
var debug = require('debug')('http')
const db_connect = async () => {
  try {
    const conn = await mongoose.connect(encodeURI(process.env.DB_SERVER), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(conn);
    return conn;
  } catch (error) {
    debug('error')
    console.log('error');
  }
  return ''
}

module.exports = db_connect;