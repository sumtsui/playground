const math = require('mathjs');

// const big = mathjs.bignumber([ 1,2 ]);
// console.log(big);
// console.log(0.1 + 0.2);
// console.log(math.bignumber(math.sum(0.1, 0.2)).toNumber());

let actualPrice = math
  .chain(math.bignumber(5.33))
  .multiply(2 ?? 1)
  .done();

console.log(actualPrice);