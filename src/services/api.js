import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'https://my-json-server.typicode.com/tiagoalmeida93/api-rocketshoes'
      : 'http://localhost:3333',
});

export default api;
