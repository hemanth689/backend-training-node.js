const axios = require('axios');

// Request Interceptor
axios.interceptors.request.use((config) => {
  console.log('Sending request to:', config.url);
  config.headers['Authorization'] = 'Bearer my-secret-token';
  return config;
});

// Response Interceptor
axios.interceptors.response.use((response) => {
  console.log('Received response with status:', response.status);
  return response;
}, (error) => {
  console.error('Error response:', error.message);
  return Promise.reject(error);
});

// Send a request
async function getPost() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Post Title:', response.data.title);
  } catch (error) {
    console.error('Failed to get post:', error.message);
  }
}

getPost();
