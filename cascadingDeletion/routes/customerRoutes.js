const express = require('express');
const router = express.Router();
const { getCustomerOrders, deleteCustomer } = require('../controllers/customerController');

router.get('/:id/orders', getCustomerOrders);
router.delete('/:id', deleteCustomer);

module.exports = router;
