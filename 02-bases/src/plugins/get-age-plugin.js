const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
  if (!birthdate) {
    throw new Error('Need a birthdate');
  }
  return getAgePlugin(birthdate);
};

module.exports = {
  getAge,
};
