// Create web server
var express = require('express');
var app = express();

// Define port
var port = 3000;

// Set up the server
var server = app.listen(port, function() {
    console.log('Server is running on port ' + port);
});

// Use the public directory
app.use(express.static('public'));