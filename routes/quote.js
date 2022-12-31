const express = require('express')
const router = express.Router()
const quoteController = require('../controllers/quote')

router.get('/', quoteController.getQuote)

router.get('/random', quoteController.getRandom)

router.post('/addQuote', quoteController.addQuote)

router.put('/markFavorited', quoteController.markFavorited)

router.delete('/deleteQuote', quoteController.deleteQuote)

module.exports = router