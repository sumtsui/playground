const { compact, identity, pick, pickBy, isBoolean, omitBy, isNil, tuple } = require('lodash');

// const arr = [ { a: true, b: false }, { a: true, b: true }, null ];

// console.log('result', compact(arr));


const params = {
  a: [ 1,2 ],
  b: [],
  shouldPass: false,
  gold: undefined,
  silver: null,
  obj: {},
  name: '',
  email: 'a@b.com'
};

// const params2 = {
//   a: [ 1,2 ],
//   b: [],
//   c: [ {} ]
// };

// const result = pickBy(params2);
// console.log('result', result);

// const result = pick(params, [ 'a', 'b', 'shouldPass', 'gold', 'silver', 'name', 'email' ]);
// const result2 = pickBy(result, (val) => val?.length > 0);
// const result3 = pickBy(params, identity);
// const result4 = pickBy(params, (value) => isBoolean(value) && value || Array.isArray(value) && value.length > 0);

// console.log('result', result);
// console.log('result2', result2);
// console.log('result3', result3);
// console.log('result4', result4);

console.log(omitBy({ attendeeCheckInQRCode: null }, isNil));