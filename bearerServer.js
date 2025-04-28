const express = require('express');
//Importing the bearerOAuth file in this server to implement.
const bearerOAuth = require('./MiddleWares/bearerOAuth');
const app = express();


app.get('/public', (req, res) => {
    res.status(200).send('Public route. EveryOne can enter');
});

//Another way to use middleware before handling the request. If we declare bearerOAuth like this, only this request will go through bearer middleware.
app.get('/private', bearerOAuth, (req, res) => {
    res.status(200).send(`Secured route. Welcome to your dashboard`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});