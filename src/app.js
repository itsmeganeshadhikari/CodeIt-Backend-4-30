const express = require("express");   // creating express server
const dotenv = require("dotenv").config();   // to include env file in this code

const app = express();

app.get("/", (req, res) => {
    res.send({ data: [{ name: "Rohan" }] });
});

app.get("/about", (req, res) => {
    res.status(200).send({ about: "This is about page" });
})

module.exports=app;