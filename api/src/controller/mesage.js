import postSchema from "../models/mensage.js"
import visitSchema from "../models/vist.js"
const mensage=async(req,res)=>{
    let {body}=req
    let {visit}=req.body

    try {
        let saveDatos= new postSchema({post:body})
        let encontrado= await visitSchema.findOne({_id:"6490a501530762cb103df982"})
        let update= await visitSchema.findByIdAndUpdate({_id:"6490a501530762cb103df982"},{visit:encontrado.visit + visit})
        await saveDatos.save()
        res.status(200).send({mesage:"mensaje guardado", valid:true})
        
    } catch (error) {
        res.status(500).send({message:"No se pudo guardar el mensaje",valid:false})
    }
}

export {mensage}