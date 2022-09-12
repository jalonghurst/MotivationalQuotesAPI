// A simple API created with express.js
const express = require('express') ; 
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
// Now app can use all the methods that cane with express
const app = express();
var cors = require('cors');
const PORT = 8000;
app.use(cors());

const motivationalquotes = {
    '1': {
        'id': '1',
        'quote': 'We cannot solve problems with the kind of thinking we employed when we came up with them.',
        'author': ' — Albert Einstein',
        'year': '', 
        'genre': 'Famous People',
    },
    '2': {
        'id': '2',
        'quote': 'Learn as if you will live forever, live like you will die tomorrow.',
        'author': ' — Mahatma Gandhi',
        'year': '', 
        'genre': 'Famous People',
    },
    '3': {
        'id': '3',
        'quote': 'If you are working on something that you really care about, you don\’t have to be pushed. The vision pulls you.',
        'author': ' — Steve Jobs',
        'year': '', 
        'genre': 'Famous People',
    },
    '4': {
        'id': '4',
        'quote': 'I never dreamed about success. I worked for it.',
        'author': ' — Estée Lauder',
        'year': '', 
        'genre': 'Famous People',
    },
    '5': {
        'id': '5',
        'quote': 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle. As with all matters of the heart, you\'ll know when you find it.',
        'author': ' — Steve Jobs',
        'year': '', 
        'genre': 'Famous People',
    },
    '6': {
        'id': '6',
        'quote': 'Just one small positive thought in the morning can change your whole day.',
        'author': ' — Dalai Lama',
        'year': '', 
        'genre': 'Famous People',
    },
    '7': {
        'id': '7',
        'quote': 'Opportunities don\'t happen, you create them.',
        'author': ' — Chris Grosser',
        'year': '', 
        'genre': 'Famous People',
    },
    '8': {
        'id': '8',
        'quote': 'Inspiration does exist, but it must find you working.',
        'author': ' — Pablo Picasso',
        'year': '', 
        'genre': 'Famous People',
    },
    '9': {
        'id': '9',
        'quote': 'Don\'t settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.',
        'author': ' — Angela Bassett',
        'year': '', 
        'genre': 'Famous People',
    },
    '10': {
        'id': '10',
        'quote': 'The only one who can tell you \“you can\’t win\” is you and you don\’t have to listen.',
        'author': ' — Jessica Ennis',
        'year': '', 
        'genre': 'Famous People',
    },

}

MongoClient.connect("mongodb+srv://motivationalquotesapi:4yWtwbJoyMCFywbE@cluster0.lwvtln3.mongodb.net/?retryWrites=true&w=majority")
.then(client => {
    console.log('Connected to Database')
    const db = client.db('motivationalquotesapi')
    const quotesCollection = db.collection('quotes')

// Respond with JSON if a request is made for API route
// app.get('/api/:quote', (request, response) => {
//     const quote = request.params.quote.toLowerCase()
//     response.json(motivationalquotes[quote])
// })
    app.set('view engine', 'ejs')
// Always place body-parser before your CRUD handlers!
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static('public'))


    // JSON motivationalquotes Hardcorded get request 
    // app.get('/api/random', (request, response) => {
    //     let randomNum = String(Math.ceil(Math.random() * 10))
    //     response.json(motivationalquotes[randomNum])
    // })

    app.get('/api/random', (request, response) => {
        let randomNum = String(Math.ceil(Math.random() * 10))
        db.collection('quotes').find().toArray()
        .then(results => {
        console.log(results)
        // response.sendFile(__dirname + '/index.html')
        response.json(results[randomNum])
        })
        .catch(error => console.error(error))
    
}) 



    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
            .then(results => {
            // console.log(results)
            // response.sendFile(__dirname + '/index.html')
            res.render('index.ejs', {quotes: results})
            })
            .catch(error => console.error(error))
        
    }) 


    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
        .then(result => {
            res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    // Set up to listen on PORT, when server is running, body runs
    app.listen( process.env.PORT || PORT, () => {
        console.log(`The server is now running on port ${PORT}`)
    })

    })

    .catch(error => console.error(error))
    // Network request firing a function.
    //  '__dirname' instructs the server to look in the current directory for the index.html file, which is set as our main path.
    // If get request is heard, HTML file will be sent 
