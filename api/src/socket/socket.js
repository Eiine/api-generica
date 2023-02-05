export const coneccionSocket=(io,app)=>{
//configuracion de coneccion
let connectedUsers = [];

io.on("connection", (socket) => {
  console.log("Se conecto el usuario" + " " + socket.id);
  connectedUsers.push(socket.id);
  
  
  socket.emit("usuarios-conectados",connectedUsers)
  //Eventos en escucha
  socket.on("chat",(user)=>{
    io.emit("mensaje",user)//para emitir a todos los que estan a la escucha es necesario usar io
  })
  

  socket.on("disconnect",()=>{
    console.log("el usuaurio se desconecto");
    connectedUsers = connectedUsers.filter(userId => userId !== socket.id);
    // enviar la lista de usuarios conectados actualizada a todos los clientes
    io.emit('usuarios-conectados', connectedUsers);
    
  })
  
  io.emit('usuarios-conectados', connectedUsers);
  
});
}