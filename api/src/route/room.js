import express, { Router }  from 'express'
const router = express.Router();
import {createRom,getSala} from"../controller/room.js"

router.post("/",createRom )
router.get("/",getSala )






export default router;