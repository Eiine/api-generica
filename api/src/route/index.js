import { Router } from "express";
import videoControler from "./userVideo.js"

let router= Router()

router.use("/inputvideo",videoControler)











export default router;