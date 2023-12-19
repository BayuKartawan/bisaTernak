import express from "express"
import { getDataUser } from "../controllers/user.js";

const router = express.Router()

//TODO
router.post('/user', getDataUser);
export default router