// https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f

// access value from nested object
const user = {
  id: 101,
  email: 'jack@dev.com',
  personalInfo: {
    name: 'Jack',
    address: {
      line1: 'westwish st',
      line2: 'washmasher',
      city: 'wallas',
      state: 'WX'
    }
  }
};

const userWithoutPersonalInfo = {
  id: 101,
  email: 'jack@dev.com',
};

const name = ((user || {}).personalInfo || {}).name;
const nameUndefined = ((userWithoutPersonalInfo || {}).personalInfo || {}).name;

console.log('name', name);
console.log('name', nameUndefined);

// access 