const express = require('express');
const app = express();
const { sequelize } = require('./models');

const userRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use(express.json());
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

sequelize.sync({ force: false }).then(() => {
    const port = 3000;
    app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
});
