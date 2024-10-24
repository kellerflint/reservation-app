// Get the express package 
const express = require('express');

// Instantiate an express (web) app
const app = express();

// Define a port number for the app to listen on
const PORT = 3000;

// Tell the app to encode data into JSON format
app.use(express.urlencoded({ extended: false }));

// Set your view (templating) engine to "EJS"
// (We use a templating engine to create dynamic web pages)
app.set('view engine', 'ejs');

// Define a "default" route, 
// e.g. jshmo.greenriverdev.com/reservation-app/
app.get('/', (req, res) => {

    console.log("Hello, world - server!");

    // Return home page
    res.render('home');
});

// Define a "confirm" route, using the GET method
app.get('/confirm', (req, res) => {

    // Send a response to the client
    res.send('You need to post to this page!');
});

// Define a "confirm" route, using the POST method
app.post('/confirm', (req, res) => {

    console.log(req.body);

    // Get the data from the form that was submitted
    // from the body of the request object
    let details = req.body;

    // Display the confirm page, pass the data
    res.render('confirm', { details: details });
});

// Tell the app to listen for requests on the designated port
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});
