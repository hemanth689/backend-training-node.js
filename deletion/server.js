const express = require('express');
const app = express();
const db = require('./models');
const employeeRoutes = require('./routes/employeeRoutes');

require('dotenv').config();

app.use(express.json());
app.use(employeeRoutes);

const PORT = process.env.PORT;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
});
