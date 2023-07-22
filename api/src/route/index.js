import { Router } from "express";
import videoControler from "./userVideo.js"
import  authRouter  from "./auth.js";
let router= Router()

router.use("/inputvideo",videoControler)
router.use("/auth",authRouter)










export default router;