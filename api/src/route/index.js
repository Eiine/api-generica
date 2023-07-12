import {Router} from 'express'
import routeMesage from"../route/mesage.js"
import visit from "./dashboard.js"
let router=Router()

router.use("/api",routeMesage)
router.use("/dashboard",visit)











export default router;