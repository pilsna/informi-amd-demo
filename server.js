
var express = require('express');

// You can set the port for the server on the command-line by setting "PORT".
var port = (process.env.PORT | 0) || 3000; // default port 3000

// Create server instance using ExpressJS and create a basic webserver.
var server = express();
server.use(express.logger());
server.use(express.static(__dirname + '/client'));
server.listen(port);

console.log('Server running on http://localhost:%s/', port);
