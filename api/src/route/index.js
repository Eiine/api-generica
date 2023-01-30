import express  from 'express'
const app = express()
import routeHome from"../route/home.js"

function routerApi(app){
app.use("/api/home",routeHome)

}










export default routerApi;