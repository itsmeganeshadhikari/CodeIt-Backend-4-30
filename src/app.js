const express = require("express");   // creating express server
const userRoute = require("./routes/user.route");
const { createConnection } = require("./db/connection");
const dotenv = require("dotenv").config();   // to include env file in this code

const app = express();
app.use(express.json())
const conn =  createConnection();
console.log(conn);
app.use("/api",userRoute);
app.get("/", (req, res) => {
    res.send({ data: [{ name: "Rohan" }] });
});

app.get("/about", (req, res) => {
    res.status(200).send({ about: "This is about page" });
})

module.exports=app;