const express = require('express');
const router = express.Router();
//importing cutomerController to get the customer details.
const { getCustomerOrders } = require('../controllers/customerController');


router.get('/:id/orders', getCustomerOrders);

module.exports = router;
