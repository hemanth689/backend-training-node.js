import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  //findAll() retrieves all records that matches the condition. In this case No condition.
  const users = await User.findAll();
  if (users.length > 0)
    res.json(users);
  else
    res.status(404).json({ message: 'No Data is available post some data' });
});

// GET user by ID
router.get('/:id', async (req, res) => {
  //findByPk() retrives the record with the primary key. In this case id.
  const user = await User.findByPk(req.params.id);
  if (user)
    res.json(user);
  else
    res.status(404).json({ message: 'User not found' });
});

// POST new user
router.post('/', async (req, res) => {
  const { name, city, education } = req.body;
  //findOne() retrives the first record that matches the condition. used for non-primary fields. In this case name.
  const exists = await User.findOne({ where: { name } });
  if (exists)
    return res.status(400).send('User already exists');

  await User.create({ name, city, education });
  res.status(201).json({ message: 'User created successfully' });
});

// PUT user
router.put('/:id', async (req, res) => {
  const { name, city, education } = req.body;
  const user = await User.findByPk(req.params.id);
  if (!user)
    return res.status(404).json({ message: 'User not found' });

  if (!name || !city || !education)
    return res.status(400).send('All fields are required');

  await user.update({ name, city, education });
  res.json({ message: 'User updated successfully' });
});

// PATCH user
router.patch('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user)
    return res.status(404).json({ message: 'User not found' });

  await user.update(req.body);
  res.json({ message: 'User updated successfully' });
});

// DELETE user
router.delete('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user)
    return res.status(404).json({ message: 'User not found' });

  await user.destroy();
  res.json({ message: 'User deleted successfully' });
});

export default router;
