const Quote = require('../models/Quote')

module.exports = {
     getQuote: async (req, res) => {
        try{
            const quoteItems = await Quote.find()
            const itemsCount = await Quote.countDocuments()
            console.log(quoteItems)
            res.render('quote.ejs', {quotes: quoteItems, count: itemsCount})
        }catch(err){
            console.log(err)
        }
    },


    getRandom: (request, response) => {
        let randomNum = String(Math.ceil(Math.random() * 10))
        Quote.find()
        .then(results => {
        console.log(results)
        // response.sendFile(__dirname + '/index.html')
        response.json(results[randomNum])
        })
        .catch(error => console.error(error))
    
    },
    addQuote: (req, res) => {
        Quote.create(req.body)
        .then(result => {
            res.redirect('/api')
        })
        .catch(error => console.error(error))
    },

    deleteQuote: (request, response) => {
        Quote.findOneAndDelete({_id:request.body.quoteIdFromJsFile})
        .then(result => {
            console.log('Quote Deleted')
            response.json('Quote Deleted')
        })
        .catch(error => console.error(error))
    
    }
}
