import jwt from "jsonwebtoken"

const tokenGenerate=(user)=>{
    let token=jwt.sign({id:user._id},process.env.SECRET)
    return token
}

export{tokenGenerate}