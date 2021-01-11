import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    // Setting jwt token to global headers 'x-auth-token' so once logged in user can send private requests to access private pages
    //   x-auth-token is the key I send token to header from backend
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
