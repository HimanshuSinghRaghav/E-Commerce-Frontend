import axios from 'axios'

export const apiBaseUrl = 'http://localhost:3000';

const token = localStorage.getItem('AUTH_TOKEN')
const api = axios.create({
  baseURL: apiBaseUrl,
  headers:{
    Authorization:`Bearer ${token}`
  }
});

export default api