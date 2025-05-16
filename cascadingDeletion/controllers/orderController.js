const { Order, Customer } = require('../models');

exports.getOrderWithCustomer = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id, {
            include: [{ model: Customer, as: 'customer' }]
        });

        if (!order) return res.status(404).json({ error: 'Order not found' });

        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
