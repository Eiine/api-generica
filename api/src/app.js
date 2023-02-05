import * as dotenv from "dotenv";
import express, { json } from "express";
const app = express();
const port = 3000;
import { Server as SocketIO } from "socket.io";
import http from "http";
import { Stream } from "stream";
import routerApi from "./route/index.js";
const server = http.createServer(app);
const io = new SocketIO(server);
import {coneccionesSoket} from "../src/socket/sockets.js"
//configuracion de archivos staticos
app.use(express.static("./src/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();
//Configuracion de cors

//rutas de la api
routerApi(app);
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
server.listen(port, () => {
  console.log("server corriendo en " + port);
});
