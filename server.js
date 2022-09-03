// A simple API created with express.js

const express = require('express')  
// Now app can use all the methods that cane with express
const app = express();
const PORT = 8000;

const motivationalquotes = {
    '1': {
        'id': '1',
        'quote': 'We cannot solve problems with the kind of thinking we employed when we came up with them.',
        'author': ' -- Albert Einstein',
        'year': '', 
        'origin': '',
        'genre': 'Famous People',
    },
    '2': {
        'id': '2',
        'quote': 'Learn as if you will live forever, live like you will die tomorrow.',
        'author': ' -- Mahatma Gandhi',
        'year': '', 
        'origin': '',
        'genre': 'Famous People',
    },
    '3': {
        'id': '3',
        'quote': 'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.',
        'author': ' -- Steve Jobs',
        'year': '', 
        'origin': '',
        'genre': 'Famous People',
    },
    '4': {
        'id': '4',
        'quote': 'I never dreamed about success. I worked for it.',
        'author': ' -- Estée Lauder',
        'year': '', 
        'origin': '',
        'genre': 'Famous People',
    },

}

// Network request firing a function.
//  '__dirname' instructs the server to look in the current directory for the index.html file, which is set as our main path.
// If get request is heard, HTML file will be sent 
  app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

// Respond with JSON if a request is made for API route
app.get('/api', (request, response) => {
    response.json(motivationalquotes)
})


// Set up to listen on PORT, when server is running, body runs
app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})


// Start server with command: node server.js