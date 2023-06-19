import postSchema from "../models/mensage.js"
import visitSchema from "../models/vist.js"
import * as dotenv from 'dotenv';
dotenv.config();
const mensage=async(req,res)=>{
    let {body}=req
    let {visit}=body
    try {
        let saveDatos= await postSchema.findByIdAndUpdate({_id:process.env.POST},{$push: {post: body}}, { new: true })

        if(visit){
        let encontrado= await visitSchema.findOne({_id:process.env.VISIT})
        let update= await visitSchema.findByIdAndUpdate({_id:process.env.VISIT},{visit:encontrado.visit + visit})
        return res.status(200).send({message:"mensaje guardado y visita decionada", valid:true})
        }
        return res.status(200).send({message:"mensaje guardado", valid:true})
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message:"No se pudo guardar el mensaje",valid:false})
    }
}

export {mensage}