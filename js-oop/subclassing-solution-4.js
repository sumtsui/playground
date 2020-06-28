/*
  https://frontendmasters.com/courses/object-oriented-js/create-an-object-with-a-class/
*/

class UserCreator {
  /*
    constructor used to be the factory function itself.
    calling the class UserCreator with new key word runs the constructor function
  */
  constructor (name, score) {
    this.name = name
    this.score = score
  }
  /*
    methods being added to the prototype of UserCreator,
    can later add more methods by adding to UserCreator.prototype
  */
  sayName () {
    console.log('I\'m ' + this.name)
  }
  increment () {
    this.score++
  }
}

/*
  what extends does for us:
  1. set PaidUserCreator.prototype.__proto__ to UserCreator.prototype
  2. set PaidUserCreator.__proto__ to UserCreator
*/

class PaidUserCreator extends UserCreator {
  constructor (paidName, paidScore, accountBalance) {
    /*
      super is almost equal to UserCreator
      it finds UserCreator in PaidUserCreator.__proto__
      what calling super does for us:
      1. this = new UserCreator(paidName, paidScore)
      2. this.__proto__ = PaidUserCreator.prototype
    */
    super(paidName, paidScore)
    this.accountBalance = accountBalance
  }
  increaseBalance () {
    this.accountBalance++
  }
}

const user1 = new UserCreator('Simon', 5)
const paidUser1 = new PaidUserCreator('Sam', 500, 100)

paidUser1.increaseBalance()
paidUser1.sayName()