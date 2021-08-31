/**
 * closure enables: partial application, currying, composing
 */

const { defaultsDeep, defaults } = require('lodash');

const createAdder = (x) => (y) => x + y;

// createAdder is a higher order function
// when it is called, it return another function
// which accesses x through closure
const add3 = createAdder(3);

// console.log(add3(4));
// console.log(add3(1));

const fetchMock = (url, config) => Promise.resolve(['done', url, config]);

/**
 * headers become repetitive
 */
/**
  const request = (options) => {
    return fetchMock(options.url, options).then((...resp) =>
      console.log(...resp)
    );
  };
  const usersPromise = request({
    url: '/users',
    headers: { 'X-Custom': 'mykey' },
  });   
  const tasksPromise = request({
    url: '/tasks',
    headers: { 'X-Custom': 'mykey' },
  });
*/

/**
 * we can solve this with partial application
 */

// const request = (defaults, options) => {
//   options = Object.assign({}, defaults, options);

//   return fetchMock(options.url, options).then((resp) => console.log(resp));
// };

// fn needs to accept two args and know how to combine them
// const partial = (fn, ...args) => {
//   return (...otherArgs) => {
//     return fn(...args, ...otherArgs);
//   };
// };

// crazy, no time for you now
// const partialFromBind = (fn, ...args) => {
//   return fn.bind(null, ...args);
// };

// const customRequest = partial(request, {
//   headers: { 'X-Custom': 'mykey' },
// });

// however,
// partial is not cool enough,
// we use currying now
// in fact, currying and partial are very similar
// instead of separating args with comma, we separating them with arrow

const request = (defaults) => (options) => {
  options = Object.assign({}, defaults, options);

  return fetchMock(options.url, options).then((resp) => console.log(resp));
};

const usersPromise = request({
  headers: { 'X-Custom': 'mykey' },
});
const tasksPromise = request({
  headers: { 'X-Custom': 'mykey' },
});

usersPromise({ url: '/users' });
tasksPromise({ url: '/tasks' });
