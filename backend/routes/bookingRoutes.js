const express = require("express");
const { sendBookingEmail, generateLink } = require("../controllers/bookingController");

const router = express.Router();

router.post("/slote", sendBookingEmail);
router.get('/generate-meet', generateLink)

module.exports = router;
