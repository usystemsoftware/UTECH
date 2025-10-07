import express from "express";
import multer from "multer";
import { applyForJob } from "../controllers/jobController.js";

const router = express.Router();
const upload = multer();

router.post("/apply", upload.single("resume"), applyForJob);

export default router; // ✅ ESM export
