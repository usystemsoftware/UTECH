import express from "express";
import { getKeywords, createKeyword } from "../controllers/keywordController.js";

const router = express.Router();

router.get("/", getKeywords);
router.post("/", createKeyword);

export default router;
