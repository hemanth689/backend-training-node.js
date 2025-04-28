//importing the express module into this file.
const express = require('express');
//create an object to it.
const app = express();

//It will parse the request body into json, we cannot access req.body without this. 
//even the client sends a valid JSON.
app.use(express.json());

//importing the file which consists all imported subRoutes at once.
const allRouters = require('./routes/index');

//use all routes
app.use('/', allRouters);

//I am running my server at port number 3000.
const port = 3000;
app.listen(port, () => {
    //This will prints some message while running the server
    //It just for users purpose to know the server is running or not.
    console.log(`Server is running at http://localhost:${port}`);
})