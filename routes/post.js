const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/items', (req, res) => {
    //get the name and city from client requested url.
    const {name, city} = req.body;
    //check whether name and city are valid values or not.
    if(name !== undefined && city !== undefined)
    {
        res.status(201).send(`created a new record in server with name : ${name} and city : ${city}`);
    }
    //If not send error message.
    else
    {
        res.status(400).send('Error : Name and City are required to create');
    }
});

module.exports = router;