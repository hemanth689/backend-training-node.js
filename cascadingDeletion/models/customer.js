module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
    }, {
        tableName: 'customers' // Custom table name
    });

    // A Customer has many Orders
    Customer.associate = models => {
        Customer.hasMany(models.Order, {
            foreignKey: 'customerId',
            as: 'orders',
            onDelete: 'CASCADE' // enables cascading delete
        });
    };

    return Customer;
};
