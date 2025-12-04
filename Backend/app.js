require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./db/db");

// Connect to the database
connectDB();

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

module.exports = app;
