module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      tableName: 'customers'  //custom table name
    });
  
    Customer.associate = models => {
      Customer.hasMany(models.Order, { foreignKey: 'customerId', as: 'orders' });
    };
  
    return Customer;
  };
  