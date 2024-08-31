import { dbConnect } from "./dbConnect";

const express = require("express");
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const path = require("path");
const multer = require("multer");
const cors = require("cors");

// app cofig
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

(async () => {
  await dbConnect();
})();
