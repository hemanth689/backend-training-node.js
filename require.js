/*
    require() function is used to import the module to use in this file. Inside we have to specify the module name.
    we can create own modules and we can easily include them in different files if needed.
    exports keyword is used to exports the module.
    require() is used to import the module.

*/
var http = require('http');     //importing the http module to create a server
var dt = require('./dateModule');       // ./modulename because it is in same directory

//This will creates a server with a function request and response.
//here 200 is http status code which means OK, this returns when everything goes well.
http.createServer(function (req, res) {
    res.writeHead(200, {'content-Type' : 'text/html'});
    //To print on server we use write method.
    res.write('The current date and time is : '+dt.myDateTime());
    //It closes the response.
    res.end();
}).listen(8080);    //server runs on port number 8080 and the url is http://localhost:8080 to see the output.