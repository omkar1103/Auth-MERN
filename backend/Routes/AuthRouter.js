const express = require('express');
const router = express.Router();
const { signup, login } = require('../Controllers/AuthController');

// Routes
router.post('/signup', signup);
// router.post('/login', login); // You can replace with actual logic later

module.exports = router;
