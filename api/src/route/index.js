import express  from 'express'
const app = express()
import routeHome from"../route/home.js"

function routerApi(app){
app.use("/api",routeHome)

}










export default routerApi;