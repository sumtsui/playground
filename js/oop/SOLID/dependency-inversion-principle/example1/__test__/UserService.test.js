const UsersService = require('../UserService');
const UsersRepository = require('../UsersRepository');
const sinon = require('sinon');

describe('User Serivce', () => {
  const users = [
    {
      id: 1,
      name: 'Joe',
      balance: 898330,
    },
  ];

  sinon.stub(UsersRepository, 'findAll').callsFake(() => {
    return Promise.resolve(users);
  });

  sinon.stub(UsersRepository, 'addOne').callsFake((user) => {
    users.push(user);
    return true;
  });

  test('getUsers', async () => {
    const actualResult = await UsersService.getUsers();

    expect(actualResult).toHaveLength(1);
  });

  it('adds user', async () => {
    await UsersService.addUser({
      name: 'Simon',
      balance: 200000,
    });

    const actualResult = await UsersService.getUsers();

    console.log(actualResult);

    expect(actualResult).toHaveLength(2);
  });
});
