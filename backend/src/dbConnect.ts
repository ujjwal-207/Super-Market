import mongoose from "mongoose";
require("dotenv").config();
console.log(process.env.MONGODB_URL);
const MONGODB_URLS = process.env.MONGODB_URL;

export const dbConnect = async () => {
  if (MONGODB_URLS) {
    try {
      await mongoose.connect(MONGODB_URLS);
      console.log("Connected");
    } catch (err) {
      console.error("Unable to connect to the database ", err);
    }
  } else {
    console.error("Mongo URL not found");
  }
};
