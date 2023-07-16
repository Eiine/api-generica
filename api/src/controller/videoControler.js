import {root,upload} from "../utils/alias.js"
import {combineFileParts, obtenerArchivos} from "../utils/JointFile.js"

const videoInput=async(req,res)=>{
   let {totalPart}=req.body
   let carpeta="juancho"//Nombre de la carpeta que se creara
   let archivo=req.files.video
   let uploadFile=root + `\\upload\\${carpeta}\\temp\\` + archivo.name
   let upload=root + `\\upload\\${carpeta}\\temp\\`
    //muevo los archivos a la carpeta destino  
   await archivo.mv(uploadFile)
   //obtiene la cantidad de archivos
   let ar= obtenerArchivos(upload)
   //se necesita hacer una funcion que dirija a la carpeta espesifica del usuario
   
   if(ar.length==totalPart){//necesito saber cuantos archivos se mandan
      combineFileParts(ar)
   
   }
      
   res.send("archivo recibido")
}


export {videoInput}