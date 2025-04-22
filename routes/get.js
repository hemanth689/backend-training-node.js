const express = require('express');
//express.Router() will create a modular route. which means some part of router in main app.
const router = express.Router();

router.use(express.json());

//If the client requests all the data.
router.get('/items', (req, res) => {
    res.status(200).send('Fetching all the data');
});

//If the client request particular record with id
router.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.status(200).send(`Fetching the particular id : ${id} data`);
});

//It is used to export this file.
module.exports = router;