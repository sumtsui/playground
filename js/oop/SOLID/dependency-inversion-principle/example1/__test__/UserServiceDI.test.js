const UsersService = require('../UserServiceDI');

describe('Users service DI', () => {
  it('gets users', async () => {
    const users = [
      {
        id: 1,
        firstname: 'Joe',
        lastname: 'Doe',
      },
    ];

    const usersRepository = {
      findAll: async () => {
        return users;
      },
    };

    const usersService = new UsersService(usersRepository);

    expect(await usersService.getUsers()).toEqual(users);
  });
});
