const { Employee } = require('../models');

// GET /employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
};

// DELETE /employees/:id
exports.deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Employee.destroy({ where: { id } });

    if (deleted) {
      res.status(200).json({ message: `Employee ${id} deleted.` });
    } else {
      res.status(404).json({ error: 'Employee not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};
