// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const { submitContact } = require("../controllers/contactController");

router.post("/form", submitContact);

module.exports = router;
