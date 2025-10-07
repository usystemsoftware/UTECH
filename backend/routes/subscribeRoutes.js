import express from "express";
import { subscribe } from "../controllers/subscribeController.js"; // ✅ Use import + .js

const router = express.Router();

router.post("/subscribe", subscribe);

export default router; // ✅ Use export default, not module.exports
