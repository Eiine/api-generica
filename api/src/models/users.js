import mongoose from "mongoose";
const Schema = mongoose.Schema;
const types = Schema.Types;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  }

});



const userModel = mongoose.model("User", UserSchema);

export default userModel;
