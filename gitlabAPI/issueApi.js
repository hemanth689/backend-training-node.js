const express = require('express');
const axios = require('axios');
const app = express();

require('dotenv').config();

app.use(express.json());

const GITLAB_TOKEN = process.env.GITLAB_TOKEN;
const PROJECT_ID = process.env.PROJECT_ID; // numeric or URL-encoded
const BASE_URL = 'https://gitlab.com/api/v4';

app.post('/create-issue', async (req, res) => {
  const { title, description } = req.body;

  try {
    const response = await axios.post(
      `${BASE_URL}/projects/${PROJECT_ID}/issues`,
      { title, description },
      {
        headers: {
          'PRIVATE-TOKEN': GITLAB_TOKEN,
        },
      }
    );
    res.status(200).json({
      message: 'Issue created successfully',
      issue_url: response.data.web_url,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to create issue',
      details: error.response?.data || error.message,
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
