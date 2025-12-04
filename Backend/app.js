require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./db/db");

// Connect to the database
connectDB();

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

module.exports = app;
