import axios from './axiosInstance';

const CLIENTS_ENDPOINT = '/clients';

// Centralized error handler
const handleApiError = (err) => {
  // Log error details (for debugging or centralized logging service)
  console.error('API Error: ', err);
  
  // You can customize error messages or structures based on your needs
  if (err.response) {
    // Server responded with a status other than 2xx
    throw new Error(err.response.data.message || 'Something went wrong with the server.');
  } else if (err.request) {
    // Request was made but no response was received
    throw new Error('No response received from the server. Please try again later.');
  } else {
    // Something else happened in setting up the request
    throw new Error(err.message || 'An unexpected error occurred.');
  }
};

// Generic function to handle API requests
const apiRequest = async (method, endpoint, data = null) => {
  try {
    const response = await axios({ method, url: endpoint, data });
    return response.data; // Return only the data part of the response
  } catch (err) {
    handleApiError(err);
  }
};

// Service functions

export const getAllClients = async () => {
  return apiRequest('get', CLIENTS_ENDPOINT);
};

export const getClientById = async (id) => {
  return apiRequest('get', `${CLIENTS_ENDPOINT}/${id}`);
};

export const createClient = async (data) => {
  return apiRequest('post', CLIENTS_ENDPOINT, data);
};

export const updateClient = async (id, data) => {
  return apiRequest('put', `${CLIENTS_ENDPOINT}/${id}`, data);
};

export const deleteClient = async (id) => {
  return apiRequest('delete', `${CLIENTS_ENDPOINT}/${id}`);
};