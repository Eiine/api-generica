import userModel from "../db_config/models/user.js"
import {upload}  from "../utils/alias.js"
import fs from "fs"
import path from "path"

const login=(req,res)=>{

}


const register=async(req,res)=>{
    let {fullname,email,password,tecnologia,experiencia}=req.body
    try {
         let user= new userModel({fullname,email,password,tecnologia,experiencia})
         let update= await user.save()
         //Crear carpeta para archivos
        fs.mkdir(path.join(upload, `${update._id}`),(err)=>{
            if (err) {
             console.log(err);
            }
            
            })        
    return res.status(200).send({update})
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("El usuario no pudo registrarse")
    }
    
}


export {login, register}