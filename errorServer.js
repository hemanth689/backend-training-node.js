const express = require('express');
//Importing the error handler middleware to implement for all the requests.
const errorHandler = require('./MiddleWares/errorHandler');
const app = express();


app.get('/login', (req, res) => {
    res.status(200).send('Welcome to HomePage');
});

app.get('/crash', (req, res, next) => {
    throw new Error('Ohh! System Crashed.');
});

app.get('/error', (req, res, next) => {
    //create custom error and add status code to it.
    const err = new Error('Oops! Something went wrong');
    err.status = 500;
    //This helps to continue further.
    next(err);
});

//we should place this use errorHandler after all routes then only if any error occur it get caught.
//Otherwise it won't get caught even error occurs.
app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});