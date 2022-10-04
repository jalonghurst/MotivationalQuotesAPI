  // Use express in server.js by requiring it, It simplifies the server creation process that is already available in Node. 
const express = require('express'); 
// Now app can use all the methods that cane with express
const app = express();
// Connect to MongoDB Database using mongoose
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const quoteRoutes = require('./routes/quote')

// Listen for environment variables 
require('dotenv').config({path:'./config/.env'})


// Call function in config/database file to connect to db using mongoose.
connectDB()
let PORT = 8000

app.set('view engine', 'ejs')
app.use(express.static('public'))
// Replaces deprecated body-parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/api', quoteRoutes)

    // Set up to listen on PORT, when server is running, body runs
app.listen(process.env.PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})