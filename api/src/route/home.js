import express, { Router }  from 'express'
const router = express.Router();
import {home} from "../controller/home.js"

router.get("/",home )






export default router;