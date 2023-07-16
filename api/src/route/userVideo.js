import { Router } from "express";
import {videoInput} from "../controller/videoControler.js"

let router=Router()

router.post("/", videoInput)


export default router;