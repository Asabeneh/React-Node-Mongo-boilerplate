const isEmpty = value => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim ().length === 0) ||
    Object.keys (value).length === 0
  );
};

module.exports = isEmpty;
