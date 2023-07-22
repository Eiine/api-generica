import { Router } from "express";
import {videoInput, sendVideo} from "../controller/videoControler.js"

let router=Router()

router.post("/:_id", videoInput)
router.get("/:_id",sendVideo)

export default router;