'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const customers = await queryInterface.bulkInsert('customers', [
      {
        name: 'Hemanth',
        email: 'hemanth@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kumar',
        email: 'kumar@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { returning: true });

    await queryInterface.bulkInsert('orders', [
      {
        product: 'Laptop',
        amount: 60000,
        customerId: customers[0].id, // Hemanth
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product: 'Phone',
        amount: 14000,
        customerId: customers[1].id, // Kumar
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product: 'Watch',
        amount: 1500,
        customerId: customers[1].id, // Kumar
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product: 'Headphones',
        amount: 5000,
        customerId: customers[0].id, // Hemanth
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('orders', null, {});
    await queryInterface.bulkDelete('customers', null, {});
  }
};
