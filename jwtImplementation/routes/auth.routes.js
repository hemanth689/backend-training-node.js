const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected', passport.authenticate('jwt', { session: false }), authController.protectedRoute);

module.exports = router;
