import * as dotenv from 'dotenv';
import express from 'express';
import routerApi from './route/index.js';
import cors from "cors"
import multer from 'multer';
const app = express();
const port = 3000;
import db from "./db/config.js"
//import {createJsonApi,saveQueryBack} from "send-http-axios-doc"

// Configuración del server
app.use(express.json());

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directorio donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix); // Nombre del archivo en el servidor
  }
});

const upload = multer({ storage });
//public
app.use(express.static('public'));
app.use(express.static('send'));
// Rutas de la API
app.use(upload.single('file')); 

// Configuración de CORS
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
  )
  
  // Rutas de la API
  app.use(routerApi);
  //app.use("/saveQuery",saveQueryBack)
  //prueas
 //createJsonApi(app,port)




  //captura de errores
  app.use((err, req, res, next) => {
    console.error(err.message); 
    res.status(500).send({ message: "Ocurrió un error en el servidor" });
  });
  // Puerto en escucha
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export {app}
