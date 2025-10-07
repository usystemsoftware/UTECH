import express from "express";
import { getOptimizations, saveOptimizations } from "../controllers/optimizationController.js";

const router = express.Router();

// Fetch all
router.get("/", getOptimizations);

// Save or update
router.post("/", saveOptimizations);

export default router;
