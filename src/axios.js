import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
  });

  // Check if user is logged in.
  (function() { 
    let authToken = localStorage.getItem("JWT");
    if (authToken === null) {
        // This means that there ISN'T JWT and no user is logged in.
        client.defaults.headers.common.Authorization = null;
    } else {
        // This means that there IS a JWT so someone must be logged in.
        client.defaults.headers.common.Authorization = authToken;
    }
  })();

export default client