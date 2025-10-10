const express = require('express');
const router = express.Router();
const { createClient, getClients } = require('../controllers/clientController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createClient);
router.get('/', authMiddleware, getClients);

module.exports = router;
