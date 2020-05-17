import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/tiagoalmeida93/api-rocketshoes',
});

export default api;
