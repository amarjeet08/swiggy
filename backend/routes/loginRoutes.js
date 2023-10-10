const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController')


router.post('/loginUser', loginController)

module.exports = router;