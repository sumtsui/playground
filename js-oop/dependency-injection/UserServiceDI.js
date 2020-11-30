// https://tsh.io/blog/dependency-injection-in-node-js/

const User = require('./UserCreator');

function UsersService(usersRepository) {
  async function getUsers() {
    return usersRepository.findAll();
  }

  async function addUser(userData) {
    const user = new User(userData);

    return usersRepository.addOne(user);
  }

  return {
    getUsers,
    addUser,
  };
}

module.exports = UsersService;
