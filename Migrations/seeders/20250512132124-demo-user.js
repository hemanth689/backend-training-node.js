'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // The 'up' method is used to insert data into the 'Users' table
  async up (queryInterface, Sequelize) {
    // Use bulkInsert to insert multiple records at once
    await queryInterface.bulkInsert('Users', [
      {
        name: 'hemanth',                  // User's name
        email: 'hk@gmail.com',            // User's email (must be unique based on your model)
        age: 21,                          // User's age
        createdAt: new Date(),            // Timestamp for when the record was created
        updatedAt: new Date()             // Timestamp for when the record was last updated
      },
      {
        name: 'kumar',
        email: 'kumar@gmail.com',
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ramana',
        email: 'ramana@gmail.com',
        age: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    // This inserts the 3 new users into the 'Users' table.
  },

  // The 'down' method is used to undo the changes made in the 'up' method
  async down (queryInterface, Sequelize) {
    // Use bulkDelete to remove records from the 'Users' table
    await queryInterface.bulkDelete('Users', {
      email: ['hk@gmail.com', 'kumar@gmail.com', 'ramana@gmail.com']  // Deleting users based on email
    }, {});
    // This deletes the users with the specified email addresses that were inserted in the 'up' method.
  }
};

