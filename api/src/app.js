import * as dotenv from 'dotenv';
import express from 'express';
import routerApi from './route/index.js';
import cors from "cors"
const app = express();
const port = 3000;
import db from "./db/config.js"
// Configuración del server
app.use(express.json());



// Configuración de CORS
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
  )
  
  // Rutas de la API
  app.use(routerApi);

  //captura de errores

  app.use((err, req, res, next) => {
    console.error(err.message); 
    res.status(500).send({ message: "Ocurrió un error en el servidor" });
  });
  // Puerto en escucha
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
