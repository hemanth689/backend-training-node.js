const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// GET all employees
router.get('/employees', employeeController.getAllEmployees);

// DELETE an employee by ID
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;
