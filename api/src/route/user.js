import express, { Router }  from 'express'
const router = express.Router();
import {register,getUsers,getUser,updateUser,deletUser} from"../controller/user.js"


router.get("/", getUsers )
router.get("/:id", getUser )
router.patch("/update/:id", updateUser )
router.post("/register", register )
router.delete("/delete/:id", deletUser )







export default router;