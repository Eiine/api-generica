import mongoose from "mongoose";
const Schema = mongoose.Schema;
const types = Schema.Types;

const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tecnologia: {
    type: String,
    required: true,
  },
  experiencia: {
    type: String,
    required: true,
  },
  cv: {
    type: String,
    required: false,
  },
  trabajoActual: {
    type: String,
    required: false,
  },
  mensagge: [
    {
      productID: types.ObjectId,
      UserName: String,
      message: String,
      date: Number
    },
  ],
  description: {
    type: String,
    required: false,
  },
  rolle: {
    type: Boolean,
    default: false,
  },
  
  state:{//sirve para saver si el usuario esta logueado
    type:Boolean,
    default:true
  }
});



const userModel = mongoose.model("User", UserSchema);

export default userModel;