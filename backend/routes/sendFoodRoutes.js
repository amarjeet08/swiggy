const express = require('express')
const router = express.Router();
const fetchDataController = require('../controllers/fetchDataController')

router.get('/fetchData', fetchDataController);

module.exports = router;

