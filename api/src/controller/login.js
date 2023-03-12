import bcrypt from "bcrypt"
import UserSchema from "../models/users.js"
const login = async(req, res) => {
    let {email, password}=req.body
    
    try {
      let user=await UserSchema.find({email:email})
      let verify= await bcrypt.compare(password,user[0].password)
        if(verify===true){
            user[0].password=undefined
            res.send(user);
        }
    } catch (error) {
      console.log(error.message);
    }
    
  };
  
  export { login };
  