const validator = require ('validator');
const isEmpty = require ('../is-empty');

module.exports = function validateStudentInput (data) {
  const errors = {};

  data.name = !isEmpty (data.name) ? data.name : '';
  data.age = !isEmpty (data.age) ? data.age : '';

  if (!validator.isLength (data.name, {min: 2, max: 15})) {
    errors.name = 'Name must be between 2 and 15 characters.';
  }

  if (isEmpty (data.name)) {
    errors.name = 'Name field is required.';
  }
  if (isEmpty (data.age)) {
    errors.age = 'Age field is required';
  }

  return {
    errors,
    isValid: isEmpty (errors),
  };
};
