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
        Quote.find()
        .then(results => {
            console.log(results.length)
        // response.sendFile(__dirname + '/index.html')
        response.json(results[String(Math.ceil(Math.random() * results.length-1))])
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
    
    },

    markFavorited: async (req, res)=>{
        try{
            await Quote.findOneAndUpdate({_id:req.body.quoteIdFromJsFile},{
                favorite: true,
            })
            console.log('Marked Favorite')
            res.json('Marked Favorite')
        }catch(err){
            console.log(err)
        }
    },
}
