import express  from 'express'
const app = express()
import routeHome from"../route/home.js"
import routeLogin from"../route/login.js"
import routeUser from"./user.js"
import routeRoom from "../route/room.js"
function routerApi(app){
app.use("/api",routeHome)
app.use("/login", routeLogin)
app.use("/user", routeUser)
app.use("/room", routeRoom)
}










export default routerApi;