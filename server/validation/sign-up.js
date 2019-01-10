const validator = require('validator');
const isEmpty = require('./is-empty');

const validateSignUpInput = data => {
  const errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }
  if (isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!validator.isLength(data.name, {min: 2, max: 15})) {
    errors.name = 'Name must be between 2 to 15 characters';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email must be valid';
  }

  if (!validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Pass must be between 6 to 30 characters.';
  }
  if (isEmpty(data.password2)) {
    errors.password2 = 'Confirm field is required';
  }
  if (!validator.equals(data.password2, data.password)) {
    errors.password2 = 'Confirm must match';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateSignUpInput;
