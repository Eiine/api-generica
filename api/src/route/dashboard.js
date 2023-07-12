import {getVisit} from "../controller/dashboard.js"
import { Router } from "express"
import {archivo} from "../controller/files.js"
let router= Router()

router.get("/",getVisit)
router.post("/", archivo)

export default router
