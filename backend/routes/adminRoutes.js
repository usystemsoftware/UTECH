import express from "express";
import { registerUser, loginUser, googleLogin } from "../controllers/adminController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google-login", googleLogin);

export default router;
