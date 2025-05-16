const { Customer, Order } = require('../models');

exports.getCustomerOrders = async (req, res) => {
    const customer = await Customer.findByPk(req.params.id, {
        //here 'as' means alias
        include: [{ model: Order, as: 'orders' }]
    });

    //return customer details with orders if found
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
};

/*
    -> include option is used to fetch associated models which means it fetched users and their related order details.
    -> In this case first it fetches customer details based on id (primary key).
    -> Later it fetches the order details what customer ordered based on id only (foriegn key).
    -> Without include we would have to fetch customer and loop through to orders, it's very slow process.
    -> include helps to get the details in faster and efficient way.
*/