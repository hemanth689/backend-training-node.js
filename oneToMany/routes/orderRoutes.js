const express = require('express');
const router = express.Router();
//importing the orderController to get the order details.
const { getOrderWithCustomer } = require('../controllers/orderController');

router.get('/:id', getOrderWithCustomer);

module.exports = router;
