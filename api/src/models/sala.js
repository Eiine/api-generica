import mongoose from "mongoose";
const Schema = mongoose.Schema;
const types = Schema.Types;

const SalaSchema = new Schema({
  
  
      name_rom: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: false,
      },

      other: [
        {
          user: String,
          message: {
            type: String,
            required: false,
          },
          hora: String
        },
      ],
});

const SalaModel = mongoose.model("Sala", SalaSchema);

export default SalaModel;
