//importing express and logger js file into this file.
import express from 'express';
import logger from './genericMiddleware.js';

const app = express();
app.use(express.json());  // To handle JSON body
app.use(logger);          // Use logger for all routes


// GET /users — Return all users
app.get('/users', (req, res) => {
    res.status(200).json(`User Details are logged on terminal`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
