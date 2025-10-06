import express from "express";
import { addUser, getUsers, loginUser } from "../controllers/addusercontroller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/", getUsers);
router.post("/login", loginUser);

export default router;
