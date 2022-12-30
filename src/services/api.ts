import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://1adf-2804-431-c7cc-febd-782f-909e-66b8-fd3b.sa.ngrok.io',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
