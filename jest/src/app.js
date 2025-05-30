const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const SECRET = 'your_jwt_secret';

// static user Memory
const user = { id: 1, email: 'test@gmail.com', password: 'Password123' };

// Login route (returns JWT)
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === user.email && password === user.password) {
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }

    return res.status(401).json({ error: 'Invalid credentials' });
});

// Protected route
app.get('/profile', authenticateToken, (req, res) => {
    res.json({ id: user.id, email: user.email });
});

// Middleware to check token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token missing' });

    jwt.verify(token, SECRET, (err, userData) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = userData;
        next();
    });
}

module.exports = app;
