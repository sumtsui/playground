// www.codementor.io/@michelre/use-function-composition-in-javascript-gkmxos5mj
// I have a list of users and I need to extract the name of all the adult users.

const users = [
  { name: 'Jeff', age: 14 },
  { name: 'Jack', age: 18 },
  { name: 'Milady', age: 22 },
];
// const filter = (cb, arr) => arr.filter(cb);
// const map = (cb, arr) => arr.map(cb);

// const result = map(
//   (u) => u.name,
//   filter((u) => u.age >= 18, users)
// ); //["Jack", "Milady"]

// const filter = (cb) => (arr) => arr.filter(cb);
// const map = (cb) => (arr) => arr.map(cb);

// const result = compose(
//   map((u) => u.name),
//   filter((u) => u.age >= 18)
// )(users); //["Jack", "Milady"]

// console.log('result', result);

const compose = (...functions) => (args) =>
  functions.reduceRight((arg, fn) => fn(arg), args);

const add = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;
const deduct = (a) => (b) => b - a;

// 3 + 5 + 2 * 4 - 10

const result2 = compose(deduct(10), add(3), add(5), multiply(4))(2); // 6

console.log('result2', result2);
