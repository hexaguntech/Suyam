import axios from 'axios';

export default axios.create({
  baseURL: 'http://suyamias.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});
