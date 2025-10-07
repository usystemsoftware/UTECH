import express from "express";
import { sendBookingEmail, generateLink } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/slote", sendBookingEmail);
router.get("/generate-meet", generateLink);

export default router;
