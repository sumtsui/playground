const userService = require('./UserService');

userService.addUser({
  name: 'Sam',
  balance: 500,
});

userService.addUser({
  name: 'Jason',
  balance: 1000,
});

const allUsers = userService.getUsers();

console.log('all users:', allUsers);
