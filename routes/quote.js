const express = require('express')
const router = express.Router()
const quoteController = require('../controllers/quote')

router.get('/', quoteController.getQuote)

router.get('/random', quoteController.getRandom)

router.post('/addQuote', quoteController.addQuote)

// router.put('/changeItemGenre', quoteController.changeItemGenre)


// router.put('/markComplete', quoteController.markComplete)

// router.put('/markIncomplete', quoteController.markIncomplete)


router.delete('/deleteQuote', quoteController.deleteQuote)

module.exports = router