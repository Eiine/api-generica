import messageSchema from "../models/mensage.js"
import visitSchema from "../models/vist.js"

const getVisit= async (req,res)=>{
    try {
    
        const visit = await visitSchema.find({})
    const message= await messageSchema.find({})
    const enviar={
        visit,
        message
    }
    res.status(200).send({enviar})
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:"Algo salio mal en el servidor", valid:false})
    }
    
}


export{getVisit}