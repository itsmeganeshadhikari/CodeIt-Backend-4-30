const express = require("express");   // creating express server
const db_connect = require("./db/connection");
const userRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route");
const dotenv = require("dotenv").config();   // to include env file in this code

const app = express();

app.use(express.json());  // used to get data from post user
app.use('/api', userRoute);
app.use('/pro',productRoute);
db_connect();

module.exports = app;