const express = require('express');
const passport = require('passport');
const authRoutes = require('./routes/auth.routes');
const db = require('./models');
require('dotenv').config();

const app = express();
app.use(express.json());

require('./middleware/passport')(passport);
app.use(passport.initialize());

app.use('/', authRoutes);

const PORT = process.env.PORT;

db.sequelize.sync({ force: false }).then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
