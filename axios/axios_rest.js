// axiosClient.js
const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 3000, // 3 seconds timeout
});
// The timeout option in Axios sets the maximum amount of time (in milliseconds) Axios will wait for the server to respond.

// Request interceptor
axiosInstance.interceptors.request.use(config => {
  console.log(`Request: ${config.method.toUpperCase()} ${config.url}`);
  return config;
}, error => Promise.reject(error));

// Response interceptor
axiosInstance.interceptors.response.use(response => {
  console.log(`Response: ${response.status}`);
  return response;
}, error => {
    //It's the error code when timeout happens.(Error connection Aborted)
  if (error.code === 'ECONNABORTED') {
    console.error('Timeout Error:', error.message);
  } else if (error.response) {
    console.error(`HTTP Error: ${error.response.status}`);
  } else {
    console.error('Network Error:', error.message);
  }
  return Promise.reject(error);
});

module.exports = axiosInstance;
