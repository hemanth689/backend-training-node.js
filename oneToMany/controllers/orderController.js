const { Order, Customer } = require('../models');

exports.getOrderWithCustomer = async (req, res) => {
    const order = await Order.findByPk(req.params.id, {
        include: [{ model: Customer, as: 'customer' }]
    });

    //return order details with customer if found
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
};
