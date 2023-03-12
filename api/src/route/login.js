import express, { Router }  from 'express'
const router = express.Router();
import {login} from "../controller/login.js"

router.post("/",login )







export default router;