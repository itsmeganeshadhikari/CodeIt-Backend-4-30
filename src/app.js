const express = require("express");   // creating express server
const userRoute = require("./routes/user.route");
const db_connect = require("./db/connection");
const roleRoute = require("./routes/role.route");
const dotenv = require("dotenv").config();   // to include env file in this code

const app = express();
app.use(express.json())
const conn = db_connect();
console.log(conn);
app.use("/api",userRoute);
app.use("/api",roleRoute);
app.get("/", (req, res) => {
    res.send({ data: [{ name: "Rohan" }] });
});

app.get("/about", (req, res) => {
    res.status(200).send({ about: "This is about page" });
})

module.exports=app;