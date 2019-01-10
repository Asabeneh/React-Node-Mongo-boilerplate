import React from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({
  label,
  name,
  placeholder,
  value,
  type,
  disabled,
  onChange,
  error,
  info,
}) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className="form-control form-control-lg"
        disabled={disabled}
        onChange={onChange}
      />
      {info && (
        <small style={{fontWeight: 'lighter'}} className="form-text text-muted">
          {' '}
          {info}{' '}
        </small>
      )}
      {error && <small style={{color: 'red'}}> {error} </small>}
    </div>
  );
};

TextInputField.defaultProps = {
  type: 'text',
};
TextInputField.propTypes = {};

export default TextInputField;
