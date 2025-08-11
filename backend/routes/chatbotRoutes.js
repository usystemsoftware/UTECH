const express = require('express');
const { getResponse } = require('../controllers/chatbotController');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, getResponse);

module.exports = router;
