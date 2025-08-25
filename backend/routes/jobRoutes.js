const express = require("express");
const multer = require("multer");
const { applyForJob } = require("../controllers/jobController");

const router = express.Router();
const upload = multer();

router.post("/apply", upload.single("resume"), applyForJob);

module.exports = router;
