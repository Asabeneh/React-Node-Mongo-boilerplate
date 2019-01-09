const validator = require('validator');
const isEmpty = require('./is-empty');

const validateSignInInput = data => {
  const errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'Email must be valid';
  }
  if (isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }



  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateSignInInput;
