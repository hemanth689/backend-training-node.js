const express = require('express');
const router = express.Router();

router.use(express.json());

router.delete('/items/:id', (req, res) => {
    //get the id using req.params from url (ex: http://localhost:3000/items/2), it will assign 2 to it in string.
    const { id } = req.params;
    //If the id is valid delete, otherwise send error response.
    if(id)
    {
        res.status(200).send(`deleted a particular id : ${id} record successfully`);
    }
    else
    {
        res.status(400).send('Error : Id is required to delete');
    }
});

module.exports = router;