const express = require('express');
const router = express.Router();

router.use(express.json());

router.put('/items/:id', (req, res) => {
    //get the id, name and city values from client requested url.
    const { id } = req.params;
    const { name, city } = req.body;
    //check these values are valid or not.
    if(name !== undefined && city !== undefined)
    {
        res.status(200).send(`Updated a particular id : ${id} record in server with name : ${name} and city : ${city}`);
    }
    else
    {
        res.status(400).send('Error : Name and City are required to update');
    }
});

module.exports = router;