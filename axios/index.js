// index.js
const express = require('express');
const axiosClient = require('./axios_rest');

const app = express();
app.use(express.json());

// GET all posts
app.get('/posts', async (req, res) => {
  try {
    const response = await axiosClient.get('/posts');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// GET a single post
app.get('/posts/:id', async (req, res) => {
  try {
    const response = await axiosClient.get(`/posts/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch post' });
  }
});

// CREATE a new post
app.post('/posts', async (req, res) => {
  try {
    const response = await axiosClient.post('/posts', req.body);
    res.status(201).json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// UPDATE a post
app.put('/posts/:id', async (req, res) => {
  try {
    const response = await axiosClient.put(`/posts/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update post' });
  }
});

// DELETE a post
app.delete('/posts/:id', async (req, res) => {
  try {
    await axiosClient.delete(`/posts/${req.params.id}`);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
