/*
  solution 3 is more straightward on inheriting methods,
  but need more work on inheriting attributes.
  Use new keyword to automate some of the task for us,
  but introduce more complexcity.
*/

/*
  userCreator is a Object-Function combo,
  in its object form, there is a property named prototype,
  which is also an object.
  the object created by this Object-Function combo with the new keyword,
  throuth its __proto__ property, will have access to the methods in the Object-Function combo's prototype
*/
function userCreator(name, score) {
   this.name = name
   this.score = score
}

userCreator.prototype.sayName = function() {
  console.log('I\'m ' + this.name)
}

userCreator.prototype.increment = function() {
  this.score++
}

function paidUserCreator(paidName, paidScore, accountBalance) {
  /*
    not using userCreator with a new keyword
    https://frontendmasters.com/courses/object-oriented-js/using-a-call-method-in-a-constructor/
    08:00
  */
  userCreator.call(this, paidName, paidScore)
  this.accountBalance = accountBalance
}

/*
  manually reset paidUserCreator's prototype object to userCreator.prototype
  same as: Object.setPrototypeof(paidUserCreator, userCreator)
*/

paidUserCreator.prototype = Object.create(userCreator.prototype)

paidUserCreator.prototype.increaseBalance = function() {
  this.accountBalance++
}

/*
what the new keyword does for us:
1. assign this to an object, which has a __proto__ property points to userCreator's prototype
2. set userCreator's parameters to this
3. return this
*/

const user1 = new userCreator('Phil', 5)
const user2 = new userCreator('James', 5)
const paidUser1 = new paidUserCreator('Alyssa', 100, 500)