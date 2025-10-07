import express from "express";
import { shareMetaData } from "../controllers/metaDatashareController.js";

const router = express.Router();

router.get("/:slug", shareMetaData);

export default router; // ✅ ESM export
