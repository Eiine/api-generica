import * as dotenv from 'dotenv';
import express  from 'express'
import routerApi from './route/index.js'
import fileUpload from "express-fileupload";
const app = express()
const port = 3000

//Archivos staticos
app.use(express.static("public"))

//configuracion del server
app.use(express.json());
dotenv.config();

//Configuracion de cors

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