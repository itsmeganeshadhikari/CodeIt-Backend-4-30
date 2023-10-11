const express = require("express");   // creating express server
const userRoute = require("./routes/user.route");
const { createConnection } = require("./db/connection"); 
const db_connect = require("./db/connection");
const dotenv = require("dotenv").config();   // to include env file in this code

const app = express();

app.use(express.json());  // used to get data from post user
app.use('/api', userRoute);
const conn = db_connect();
console.log(conn);

module.exports = app;