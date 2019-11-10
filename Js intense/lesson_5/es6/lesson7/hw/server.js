import axios from 'axios';
export const server = axios.create({
  baseURL: '/api/',
  headers: { Autorization: 'test' }
});
