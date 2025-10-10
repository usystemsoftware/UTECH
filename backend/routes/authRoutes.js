import express from "express";
import { register, login, sendOtp, verifyOtp } from "../controllers/authController.js";

const router = express.Router();

// Auth endpoints
router.post("/register", register);
router.post("/login", login);

// OTP endpoints
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

export default router;
