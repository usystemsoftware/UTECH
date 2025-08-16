const express = require('express');
const { shareMetaData } = require('../controllers/metaDatashareController');

const router = express.Router();

router.get('/:slug', shareMetaData);

module.exports = router;
