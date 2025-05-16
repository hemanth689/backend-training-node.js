const { Customer, Order } = require('../models');

exports.getCustomerOrders = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id, {
            include: [{ model: Order, as: 'orders' }]
        });

        if (!customer) return res.status(404).json({ error: 'Customer not found' });

        res.json(customer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) return res.status(404).json({ error: 'Customer not found' });

        await customer.destroy(); // Cascading deletion of orders
        res.json({ message: 'Customer and related orders deleted successfully.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
