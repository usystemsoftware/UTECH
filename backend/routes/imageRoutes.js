const express = require('express');
const router = express.Router();
const { uploadImage, getImages, deleteImage, uploadMiddleware } = require('../controllers/imageController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/upload', authMiddleware, uploadMiddleware, uploadImage);
router.get('/', authMiddleware, getImages);
router.delete('/:id', authMiddleware, deleteImage);

module.exports = router;
