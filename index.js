const express = require("express");
const app = express();
const connection = require("./connection");
const productRoute = require("./routes/product");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/product", productRoute);

module.exports = app;