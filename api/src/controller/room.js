import SalaModel from "../models/sala.js"

const createRom=async(req,res)=>{
    let {name_rom, category}=req.body
    let exist=await SalaModel.find({name_rom})
    if(exist< 1){
    let sala=new SalaModel({name_rom, category})
    sala.save()
    
    return res.send({message:"sala creada",sala})
    }
return res.send({message:"Solo puede haber una sala de chat grupal"})

}

const getSala=async(req,res)=>{
    let sala=await SalaModel.find({})
    res.send(sala)
}


export {createRom, getSala}