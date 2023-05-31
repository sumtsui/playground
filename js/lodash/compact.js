const { compact } = require('lodash');

const arr = [ { a: true, b: false }, { a: true, b: true }, null ];

console.log('result', compact(arr));