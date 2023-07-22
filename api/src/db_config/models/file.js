import mongoose from "mongoose";
const Schema = mongoose.Schema;
const types = Schema.Types;

const FileSchema = new Schema({
  Cv: {
    type: String,
    required: true,
      },

    img: {
        type: String,
        required: true,
        },
        video: {
            type: String,
            required: true,
            },
})

const fileModel = mongoose.model("File", FileSchema);

export default fileModel;