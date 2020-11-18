/*
  solution 2 is more straightward on inheriting attributes,
  but need more work on inheriting methods 
  we do everything by hand. I think this one is more clear
*/

/*
  mainly use Object.create and Object.setPrototypeOf
*/

const userFunctions = {
  sayName: function () {
    console.log("I'm " + this.name);
  },
  increment: function () {
    this.score++;
  },
};

function userCreator(name, score) {
  const newUser = Object.create(userFunctions);

  newUser.name = name;
  newUser.score = score;

  return newUser;
}

function paidUserCreator(paidName, paidScore, accountBalance) {
  /*
   * create a new user with userCreator
   */
  const newPaidUser = userCreator(paidName, paidScore);

  /*
   * at this moment,
   * newPaidUser's __proto__ is pointing to userFunctions
   */

  /*
   * manually set newPaidUser's __proto__ to point to paidUserFunctions
   */
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);

  newPaidUser.accountBalance = accountBalance;

  return newPaidUser;
}

const paidUserFunctions = {
  increaseBalance: function () {
    this.accountBalance++;
  },
};

/*
 * manually set paidUserFunctions's prototype's __proto__ to point to userFunctions
 */
Object.setPrototypeOf(paidUserFunctions, userFunctions);

const user1 = userCreator('Phil', 5);
const paidUser1 = paidUserCreator('Alyssa', 100, 500);

paidUser1.__proto__ === paidUserFunctions; // true
paidUserFunctions.__proto__ === userFunctions; // true
