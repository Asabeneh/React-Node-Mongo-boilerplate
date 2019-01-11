if (localStorage.getItem('jwtToken')) {
  //set auth token header auth
  setAuthToken(localStorage.getItem('jwtToken'));
  //Decode token and get user info and exp
  console.log(localStorage.getItem('jwtToken'));
  const decoded = jwt_decode(localStorage.getItem('jwtToken'));
  console.log(decoded);
  //set user and isAuthenticated
  this.setState({
    isAuthenticated: true,
    user: decoded,
  });
  //check for expired token
  // const currentTime = Date.now() / 1000;
  // if (decoded.exp < currentTime) {
  //   //logout user

  //   //Redirect to login;
  //   window.location.href = '/login';
  // }
}

import axios from 'axios';
const setAuthToken = token => {
  if (token) {
    //Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    //Delete auth header;
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
