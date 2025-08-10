const express = require('express');
const router = express.Router();
const { shortenUrl, redirectToOriginal, getAllUrls } = require('../controllers/urlController');

router.post('/api/shorten', shortenUrl);

router.get('/api/urls', getAllUrls);

router.get('/:shortcode', redirectToOriginal);

module.exports = router;