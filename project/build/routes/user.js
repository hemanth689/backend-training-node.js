"use strict";

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const {
  User
} = require('../models');
const authMiddleware = require('../middleware/auth');
require('dotenv').config();

// Signup
router.post('/signup', async (req, res) => {
  try {
    const {
      name,
      mobileNo,
      address,
      username,
      password
    } = req.body;
    const user = await User.create({
      name,
      mobileNo,
      address,
      username,
      password
    });
    res.status(201).json({
      message: 'User created',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: 'Signup failed',
      error: error.message
    });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const {
      username,
      password
    } = req.body;
    const user = await User.findOne({
      where: {
        username
      }
    });
    if (!user) return res.status(404).json({
      message: 'User not found'
    });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({
      message: 'Invalid password'
    });
    const token = jwt.sign({
      id: user.id,
      username: user.username
    }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
    res.json({
      message: 'Login successful',
      data: token
    });
  } catch (error) {
    res.status(500).json({
      message: 'Login error',
      error: error.message
    });
  }
});

// GET user profile (protected route)
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: {
        exclude: ['password']
      } // Hides the password field
    });
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }
    res.json({
      message: 'User profile fetched successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch user profile',
      error: error.message
    });
  }
});
module.exports = router;