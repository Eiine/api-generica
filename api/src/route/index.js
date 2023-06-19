import {Router} from 'express'
import routeMesage from"../route/mesage.js"

let router=Router()

router.use("/api",routeMesage)












export default router;