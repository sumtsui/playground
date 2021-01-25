const User = require('./UserCreator');
const UsersRepository = require('./UsersRepository');

async function getUsers() {
  return UsersRepository.findAll();
}

async function addUser(userData) {
  const user = new User(userData);

  return UsersRepository.addOne(user);
}

module.exports = {
  getUsers,
  addUser,
};
