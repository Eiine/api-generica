import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.URL_MONGO);
  console.log("Conectado a la base de datos");
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

export default main;