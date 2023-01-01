## About this API
This fullstack app features an interface to interact with the database using HTTP requests made through clientside JavaScript to GET, POST, UPDATE and DELETE the motivational quotes in the collection.

New quotes can be created submitting data for the quote, author and genre.

 **Link To Project:** https://motivational-quotes-api-yb79.onrender.com/api

 A random quote from the  database can be generated using the link below.

## How It's Made: 
This CRUD API started as a node backend server working with raw and hardcoded JSON data with an endpoint displaying a random quote. Express.js was then incorportated to  simplify the process of writing server side JavaScript, HTTP requests and to improve readability, and EJS set up as the templating engine rendering HTML. MongoDB was finally connected to this application, and has replaced the raw JSON data and updated the endpoint to get data from the collection containing quotes(documents) stored on the database. 

**Link To Generate A Random Quote:** https://motivational-quotes-api-yb79.onrender.com/api/random

Generate a random document from the quotes collection in MongoDB database, the GET response is in JSON format. Each document contains {id: author: quote: genre:} key-value pairs.

![Screen capture](/public/screencapture-motivational-quotes-api.png)