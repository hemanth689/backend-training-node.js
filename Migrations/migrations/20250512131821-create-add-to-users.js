'use strict'; // Enables strict mode to catch common errors

module.exports = {
  // The 'up' method is executed when applying the migration
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'age', {
      type: Sequelize.INTEGER,   // Data type: INTEGER (whole numbers)
      allowNull: true            // Allows NULL values; set to false if the field is mandatory
    });
  },

  // The 'down' method is executed when reverting (undoing) the migration
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'age'); // Removes the 'age' column from 'Users' table
  }
};