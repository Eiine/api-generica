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

//configuracion de archivos staticos
app.use(express.static("./src/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();
//Configuracion de cors

//rutas de la api
routerApi(app);
//configuracion de coneccion

io.on("connection", (socket) => {
  console.log("Se conecto el usuario" + " " + socket.id);
});

server.listen(port, () => {
  console.log("server corriendo en " + port);
});
