const { default: mongoose } = require("mongoose")
const dotenv = require('dotenv').config()
var debug = require('debug')('http')


const db_connect = async () => {
  try {
    const conn = await mongoose.connect(encodeURI(process.env.CONNECTION), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    conn.connections.map((e) => {
      console.log(`Mongodb connected on port ${e.port} and database name ${e.name}`);
    })
    return conn;

  } catch (error) {
    debug('error')
    console.log('error');
  }
  return ''
}

module.exports = db_connect;
