import express from "express";
import { addUser, getUsers, deleteUser } from "../controllers/addusercontroller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser); // Uncomment if updateUser is implemented

export default router;
