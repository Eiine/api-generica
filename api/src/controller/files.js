
const archivo=(req,res)=>{
    let {file}=req
    let {dato}=req.body
    console.log(dato);
    res.send("ok")
}


export {archivo}