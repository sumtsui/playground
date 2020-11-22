function User(data) {
  const { name, balance } = data;

  this.name = name;
  this.balance = balance;
  this.id = Math.random().toString().slice(2);
}

module.exports = User;
