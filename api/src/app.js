import * as dotenv from 'dotenv';
import express  from 'express'
import routerApi from './route/index.js'


const app = express()
const port = 3000

//configuracion del server
app.use(express.json());
dotenv.config();
//Configuracion de cors

//rutas de la api
routerApi(app);

//Puerto en escucha
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})