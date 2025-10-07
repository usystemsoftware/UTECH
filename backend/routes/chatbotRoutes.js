import express from "express";
import { getResponse } from "../controllers/chatbotController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, getResponse);

export default router;   // ✅ ESM export
