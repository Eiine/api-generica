import {root,upload} from "../utils/alias.js"
import {combineFileParts, obtenerArchivos} from "../utils/JointFile.js"
//import {formatConverter} from "../utils/ChangeFormat.js";
import fs from "fs"
const videoInput=async(req,res)=>{
   
   let {totalPart}=req.body
   let carpeta=req.params._id//Nombre de la carpeta que se creara
   let archivo=req.files.video
   let uploadFile=root + `\\upload\\${carpeta}\\temp\\` + archivo.name
   let uploadFileConverter=root + `\\upload\\${carpeta}\\` + "precentacion.mp4"
   let upload=root + `\\upload\\${carpeta}\\temp\\`
    //muevo los archivos a la carpeta destino  
   await archivo.mv(uploadFile)
   //obtiene la cantidad de archivos
   let ar= obtenerArchivos(upload)
   //se necesita hacer una funcion que dirija a la carpeta espesifica del usuario
   if(ar.length==totalPart){//necesito saber cuantos archivos se mandan
      combineFileParts(ar,carpeta)
      //await formatConverter(uploadFileConverter)
   }
      
   res.send("archivo recibido")
}

const sendVideo=(req,res)=>{
   try {
   
   let carpeta=req.params._id
   let uploadFileConverter=root + `\\upload\\${carpeta}\\` + "precentacion.mp4"
   const stream = fs.createReadStream(uploadFileConverter);
   stream.pipe(res);
   } catch (error) {
      console.log(error);
   }
   
 };



export {videoInput, sendVideo}