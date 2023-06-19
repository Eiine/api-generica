import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    post: [{
      name: String,
      mesagge:String,
    }],
},
  { timestamps: true, versionKey: false }
);

export default model("PostModel", postSchema);