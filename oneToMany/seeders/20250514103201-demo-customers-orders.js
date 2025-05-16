'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert multiple customers
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
    //{ returning: true } This tells the database return the updated rows or newly inserted rows 
    // after the operation like update or destroy.

    // Insert multiple orders, associated with the inserted customers
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

  down: async (queryInterface, Sequelize) => {
    //If we undo the seed then this will execute and moves the database to previous state.
    //which means whatever the insertion happened in this seed that data will be deleted.
    await queryInterface.bulkDelete('orders', null, {});
    await queryInterface.bulkDelete('customers', null, {});
  }
};
