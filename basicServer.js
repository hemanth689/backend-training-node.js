const express = require('express');
//importing the basicAuth middleware to implement.
const basicAuth = require('./MiddleWares/basicAuth');
const app = express();

app.use(express.json());
//This helps that every client request should go through the basicAuth middleware before handling the request.
app.use(basicAuth);

app.get('/login', (req, res) => {
    res.status(200).send(`Authorization is Successfull\nWelcome, ${req.user.username}`);
});

app.get('/dashboard', (req, res) => {
    res.status(200).send(`Hii, ${req.user.username}\nThis is your Dashboard`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});