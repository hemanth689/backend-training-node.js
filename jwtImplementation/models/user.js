/*
    It is Used for hashing passwords securely.
    Never store plain-text passwords in the database.
    bcrypt protects passwords by turning them into a scrambled version (called a hash) that can't be reversed.
    It also adds random data (called a salt) to make each password hash unique, even if two people use the same password.
    Later, when someone logs in, bcrypt checks the entered password by comparing it to the saved hash (not by decrypting it).
*/
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    User.beforeCreate(async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
    });

    return User;
};
