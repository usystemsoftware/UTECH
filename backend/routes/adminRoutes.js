const express = require("express");
const { registerAdmin } = require("../controllers/adminController");

const router = express.Router();

// POST /api/admin/register
router.post("/register", registerAdmin);

module.exports = router;
