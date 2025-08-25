const express = require("express");
const { sendBookingEmail } = require("../controllers/bookingController");

const router = express.Router();

router.post("/slote", sendBookingEmail);

module.exports = router;
