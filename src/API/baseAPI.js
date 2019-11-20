import axios from 'axios';

const baseAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'content-Type': 'application/json',
  },
});

export default baseAPI;
