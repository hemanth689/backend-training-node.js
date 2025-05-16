module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        product: DataTypes.STRING,
        amount: DataTypes.FLOAT,
    }, {
        tableName: 'orders'
    });

    // Each Order belongs to one Customer
    Order.associate = models => {
        Order.belongsTo(models.Customer, {
            foreignKey: 'customerId',
            as: 'customer'
        });
    };

    return Order;
};
