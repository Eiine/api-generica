import { Router }  from 'express'
import {mensage} from "../controller/mesage.js"
const router = Router();

router.post("/message",mensage)







export default router;