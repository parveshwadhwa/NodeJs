const express = require("express");
const router = express.Router();
const {handleGenerateShortUrl, handleGetResult, handleAnalyticsOfRoute} = require("../controllers/url");

router.post('/', handleGenerateShortUrl);
router.get('/:shortId', handleGetResult);
router.get('/analytics/:shortId', handleAnalyticsOfRoute);

module.exports = router;