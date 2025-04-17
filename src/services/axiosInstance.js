import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Set your base API URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors for auth, error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
