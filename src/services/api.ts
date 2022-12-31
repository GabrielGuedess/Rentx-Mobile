import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://065d-2804-431-c7cc-febd-cc09-a4fc-742a-35bb.sa.ngrok.io',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
