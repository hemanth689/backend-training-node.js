const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

//we can handle the client requests here, basically requests are comes through routes.
//First user should register in the database with email and password.
//After that user should login with the same credentials then user will get jwt token.
//Then user can achieve protected route using jwt token.
exports.register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const exists = await User.findOne({ where: { email } });
        if (exists) return res.status(400).json({ message: 'Email already in use' });

        const user = await User.create({ email, password });
        res.status(201).json({ message: 'User registered', user: { id: user.id, email: user.email } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//This will be executed when the jwt token is valid.
exports.protectedRoute = (req, res) => {
    res.json({ message: 'Protected route access granted', user: req.user.email });
};
