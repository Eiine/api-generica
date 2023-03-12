import {saveInBd} from "../utils/saveInBd.js"
export const coneccionSocket=(io,app)=>{
//configuracion de coneccion
let connectedUsers = [];
try{
io.on("connection", (socket,user) => {
  console.log("Se conecto el usuario" + " " + socket.id );
  socket.emit("usuarios-conectados",connectedUsers)
  //Eventos en escucha
  socket.on("chat",(user)=>{
    console.log(user);
    saveInBd(user)
    io.emit("mensaje",user)//para emitir a todos los que estan a la escucha es necesario usar io
  })
  
  
  
  socket.on("usuarios",(user)=>{
    console.log(user);
    let enviar={email:user.email,image:user.image,name:user.name,_id:user._id,socket:socket.id}
    connectedUsers.push(enviar)
    
    io.emit("usuarios",connectedUsers)
  })
  

  socket.on("disconnect",()=>{
    console.log("el usuaurio se desconecto");
    connectedUsers = connectedUsers.filter(userId => userId.socket !== socket.id);
    
    io.emit("usuarios",connectedUsers)
    // enviar la lista de usuarios conectados actualizada a todos los clientes
    io.emit('usuarios-conectados', connectedUsers);
    
  })
  
  io.emit('usuarios-conectados', connectedUsers);
  
});
}catch(error){
  console.log(error.message);
}
}