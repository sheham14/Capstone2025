// src/services/api.js
import axios from 'axios';
import mockApi from './mockApi';

// Create Axios instance
const api = axios.create({
  baseURL: '/api', // Relative URL for now
});

// Intercept requests to use mockApi in development
api.interceptors.request.use(async (config) => {
  if (config.url === '/quote' && config.method === 'post') {
    const response = await mockApi.post('/api/quote', config.data);
    return { ...config, adapter: () => Promise.resolve(response) };
  }
  if (config.url === '/policies/me' && config.method === 'get') {
    const response = await mockApi.get('/policies/me');
    return { ...config, adapter: () => Promise.resolve(response) };
  }
  return config;
});

export default api;