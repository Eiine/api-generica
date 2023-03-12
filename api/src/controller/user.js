import {tokenGenerate} from "../utils/tokenGenerate.js"
import UserSchema from "../models/users.js"
import bcrypt from "bcrypt"
const register=async(req,res)=>{
const {name,email,password,image}=req.body
   try{

let exist= await UserSchema.find({email})
//comprueba existencia del email
if(exist.length===0){
    let passwordHash= await bcrypt.hash(password,8)
    
    let user= new UserSchema({
    name,
    password:passwordHash,
    email,
    image
})

user.save()
let token=tokenGenerate(user)
user= user.toObject();
    delete user.password;
let enviar={
    user,
    token
}
return res.send(enviar)
}
return res.send({message:"El email existe en la base de datos"})
}catch(error){
    console.log(error);
       }
}
const updateUser=async(req,res)=>{
    const {id}=req.params
    const {name,email,password,image}=req.body
    try {
        let update= await UserSchema.findByIdAndUpdate({_id:id},{name,email,password,image})
        let userUpdate=await UserSchema.findById({_id:update._id}).select("-password")
    
    res.send(userUpdate)    
    } catch (error) {
        console.log(error.message);
    }
}

const deletUser=async(req,res)=>{
    const {id}=req.params
 const deleteUser=await UserSchema.findOneAndDelete({_id:id})
 console.log(deleteUser);
 res.send({message:"user eliminado"})
}
const getUsers=async(req,res)=>{
    let users=await UserSchema.find({}).select("-password");
    console.log(users);
    res.send(users)
}

const getUser=async(req,res)=>{
    let {id}=req.params
    let users=await UserSchema.find({_id:id}).select("-password");
    console.log(users);
    res.send(users)
}
export {register, getUsers, getUser,updateUser, deletUser}