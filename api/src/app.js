import * as dotenv from "dotenv";
import express, { json } from "express";
const app = express();
const port = 3001;
import config from "../src/db/config.js"
import { Server as SocketIO } from "socket.io";
import http from "http";
import { Stream } from "stream";
import routerApi from "./route/index.js";
const server = http.createServer(app);
import cors from "cors";
const io = new SocketIO(server, {
  cors: {
    origin: "https://chat-react-sand.vercel.app/",
    methods: ["GET", "POST"]
  }
})
import {coneccionSocket} from "../src/socket/socket.js"
//configuracion de archivos staticos
app.use(express.static("./src/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();
//Configuracion de cors
app.use(cors())
//rutas de la api
routerApi(app);
//conecciones
coneccionSocket(io,app)
//escucha de puerto
server.listen(port, () => {
  console.log("server corriendo en " + port);
});
