/*
Sequelize is a Node.js ORM (Object Relational Mapping) library that makes it easier to work with 
SQL databases like PostgreSQL, MySQL, SQLite, etc., using JavaScript objects.
Instead of writing raw SQL queries we can do the same thing using Sequelize.
It turns JavaScript classes (models) into database tables and provides functions to create, read, update, and delete rows from those tables.
Most of the methods provided by Sequelize are asynchronous and therefore it return Promises. 
They are all Promises, so we can use the Promise API like (using then, catch, finally).
Default port for sequelize is 5432.
*/
/*
    Configure Sequelize with PostgreSQL :
    Steps to configure
    -> install dependencies using npm install sequelize pg pg-hstore.
    -> create a sequelize instance in project.
    -> Test the connection.
*/

//This will import the sequelize into this project.
import { Sequelize } from 'sequelize';

//creation of sequelize instance and pass arguments like database, username, password, and js object.
//JS object consists of hostname default value is localhost, dialect which means which database system we are connecting to.
const sequelize = new Sequelize('my_pgdb', 'postgres', 'gammastack', {
    host: 'localhost',
    dialect: 'postgres'
});

//We can use authenticate() for checking the connection is OK.
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//This will close the connection, otherwise it will be opened by default and use the same connection for all queries.
//Once sequelize.close() has been called, it's impossible to open a new connection. 
//we need to create a new Sequelize instance to access the database again.
sequelize.close();