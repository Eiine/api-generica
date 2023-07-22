import * as dotenv from 'dotenv';
import express  from 'express'
import routerApi from './route/index.js'
import fileUpload from "express-fileupload";
import {connect} from "./db_config/db_config.js"
import cors from "cors"
const app = express()
const port = 3000

//Archivos staticos
app.use(express.static("public"))
//Coneccion con db
connect()
//configuracion del server
app.use(express.json());
dotenv.config();

//Configuracion de cors
app.use(cors("*"))
//upload archivos
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);

//rutas de la api
app.use(routerApi)

//Puerto en escucha
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})