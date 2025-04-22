//importing the express module into this file.
const express = require('express');
//create an object to it.
const app = express();

//It will parse the request body into json, we cannot access req.body without this. 
//even the client sends a valid JSON.
app.use(express.json());

//importing all the sub routers into this express.
const getRouter = require('./routes/get');
const postRouter = require('./routes/post');
const putRouter = require('./routes/put');
const patchRouter = require('./routes/patch');
const deleteRouter = require('./routes/delete');

//This will do matching with particular router.
//app.use(path, router), here path means whenever get request is called this will look for the path starting with / in getrouter file.
//same for the routers. It checks request url with root path in particular router file. 
app.use('/', getRouter);
app.use('/', postRouter);
app.use('/', putRouter);
app.use('/', patchRouter);
app.use('/', deleteRouter);

//I am running my server at port number 3000.
const port = 3000;
app.listen(port, () => {
    //This will prints some message while running the server
    //It just for users purpose to know the server is running or not.
    console.log(`Server is running at http://localhost:${port}`);
})