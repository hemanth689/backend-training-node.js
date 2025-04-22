const express = require('express');
const router = express.Router();

router.use(express.json());

router.patch('/items/:id', (req, res) => {
    const { id } = req.params;
    const { name, city } = req.body;
    //If the client requesting to change only the name using patch.
    if(name !== undefined)
    {
        res.status(200).send(`Updated a particular id : ${id} record in server with name : ${name} only`);
    }
    //If the client is requesting to change the city only
    else if(city !== undefined)
    {
        res.status(200).send(`Updated a particular id : ${id} record in server with city : ${city} only`);
       
    }
    //If the client is requesting to change both
    else if(name !== undefined && city !== undefined)
    {
        res.status(200).send(`Updated a particular id : ${id} record in server with name : ${name} and city : ${city}`);
    }
    //If the name and city are invalid, then send error response.
    else
    {
        res.status(400).send('Error : Name or City is required to update');
    }
});

module.exports = router;