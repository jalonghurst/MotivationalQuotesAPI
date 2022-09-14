This CRUD API started as a node backend server working with raw and hardcoded JSON data with an endpoint displaying a random quote. Express.js was then incorportated to  simplify the process of writing server side JavaScript, HTTP requests and to improve readability, and EJS set up as the templating engine rendering HTML. MongoDB was finally connected to this application, and has replaced the raw JSON data and updated the endpoint, with a collection of quotes(documents) stored on it's database. 

This fullstack app features an interface to interact with the database using clientside JavaScript to GET, POST, UPDATE and DELETE the motivational quotes in the collection. 

Endpoint/s:

Generate a random document from the quotes collection in MongoDB database, the GET response is in JSON format. Each document contains {id: author: quote: genre:} key-value pairs. 
Use this address: https://api-motivational-quotes.herokuapp.com/api/random
