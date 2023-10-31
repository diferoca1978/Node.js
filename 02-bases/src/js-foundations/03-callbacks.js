const users = [
  {
    name: 'Jhon Doe',
    age: ' 40',
  },
  {
    name: 'Janne Doe',
    age: ' 37',
  },
];

const getUserByName = (name, callback) => {
  const user = users.find((row) => row.name == name);
  user ? callback(null, user) : callback(`User not found with name ${name}`);
};

module.exports = {
  getUserByName,
};
