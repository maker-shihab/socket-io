const express = require('express');
const { verifyToken } = require('../middlewares/authMiddleware');
const { sendMessage } = require('../services/services');

const router = express.Router();

router.post('/send', verifyToken, sendMessage);

module.exports = router;