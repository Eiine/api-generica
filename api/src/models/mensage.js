import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    post: [{
      page:String,
      name: String,
      message:String,
    }],
},
  { timestamps: true, versionKey: false }
);

export default model("PostModel", postSchema);