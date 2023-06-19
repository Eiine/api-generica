import { Schema, model } from "mongoose";

const visitSchema = new Schema(
  {
    visit: Number,
},
  { timestamps: true, versionKey: false }
);

export default model("visitModel", visitSchema);