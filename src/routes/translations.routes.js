const express = require('express');
const { getTranslationById } = require('../controllers/translationsController');

const router = express.Router();

router.get('/:id', getTranslationById);

module.exports = router;
