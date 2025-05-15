'use strict'; // Enforces strict mode, which helps catch common coding mistakes

module.exports = {
  // 'up' function: defines the changes to apply to the database (e.g., creating tables)
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', { // Creates a new table called 'Users'
      
      // Primary key column: 'id'
      id: {
        allowNull: false,        // Field cannot be null
        autoIncrement: true,     // Auto-increments with each new record (1, 2, 3, ...)
        primaryKey: true,        // Marks this column as the primary key (unique identifier)
        type: Sequelize.INTEGER  // Data type: Integer
      },

      // Name column
      name: {
        type: Sequelize.STRING   // Data type: STRING (typically maps to VARCHAR in SQL)
        // No 'allowNull' means null is allowed by default
      },

      // Email column
      email: {
        type: Sequelize.STRING,  // Data type: STRING
        unique: true             // Ensures all values in this column are unique (no duplicates)
        // Used often for login credentials
      },

      // createdAt column: tracks when the record was created
      createdAt: {
        allowNull: false,        // Must be present
        type: Sequelize.DATE     // Data type: DATE (stores date and time)
        // Sequelize automatically manages this when using models with timestamps: true
      },

      // updatedAt column: tracks when the record was last updated
      updatedAt: {
        allowNull: false,        // Must be present
        type: Sequelize.DATE     // Sequelize updates this whenever the record is modified
      }
    });
  },

  // 'down' function: defines how to revert the changes made by 'up'
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users'); // Drops the 'Users' table if rollback is triggered
  }
};
