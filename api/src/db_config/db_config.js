import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config()

async function connect() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Could not connect to db \n" + error);
  }
}

export {connect};