const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: false,
  } 
}, { collection : 'quotes' })

module.exports = mongoose.model('Quote', QuoteSchema);