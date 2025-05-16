const express = require('express');
const router = express.Router();
const { getOrderWithCustomer } = require('../controllers/orderController');

router.get('/:id', getOrderWithCustomer);

module.exports = router;
