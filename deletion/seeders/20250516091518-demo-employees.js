'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', [
      {
        name: 'Hemanth',
        email: 'hemanth@gmail.com',
        salary: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kumar',
        email: 'kumar@gmail.com',
        salary: 45000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {
      //for deleting the rows
      truncate: true,
      //for id starting from 1 if we insert anything otherwise it starts where it ends.
      restartIdentity: true,
      //It's related to foriegn keys.
      cascade: true
    });
  }
};
