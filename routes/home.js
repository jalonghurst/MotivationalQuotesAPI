const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const quoteController = require('../controllers/quote')

router.get('/', homeController.getIndex) 

module.exports = router