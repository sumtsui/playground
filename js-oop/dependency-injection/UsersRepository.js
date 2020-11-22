module.exports = {
  users: [],
  findAll() {
    return this.users;
  },
  addOne(user) {
    this.users.push(user);
    return true;
  },
};
