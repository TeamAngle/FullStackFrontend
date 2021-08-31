export const environment = {
  production: true,
  apiBaseUrl: 'http://localhost:8080'
};

const API = process.env.NODE_ENV === 'production' ? 'https://sublime-kitchen.herokuapp.com/' : 'http://localhost:8080';

