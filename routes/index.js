const express = require('express');

const router = express.Router();

//It will parse the request body into json, we cannot access req.body without this. 
//even the client sends a valid JSON.
router.use(express.json());

//importing all the sub routers into this express.
const getRouter = require('./get');
const postRouter = require('./post');
const putRouter = require('./put');
const patchRouter = require('./patch');
const deleteRouter = require('./delete');

//This will do matching with particular router.
//app.use(path, router), here path means whenever get request is called this will look for the path starting with / in getrouter file.
//same for the routers. It checks request url with root path in particular router file. 
router.use('/', getRouter);
router.use('/', postRouter);
router.use('/', putRouter);
router.use('/', patchRouter);
router.use('/', deleteRouter);

module.exports = router;