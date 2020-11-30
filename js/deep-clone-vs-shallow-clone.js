const _ = require('lodash');

const obj = {
  a: {
    a0: 10,
    a1: 20,
  },
  b: {
    b0: 10,
    b1: 20,
  },
  c: 123,
};

function processObjectShallow(object) {
  const insideObj = { ...object };

  insideObj['a'].a0 = 1000;

  return insideObj;
}

function processObjectDeep(object) {
  const insideObj = _.cloneDeep(object);

  insideObj['a'].a1 = 1000;

  return insideObj;
}

// const processed1 = processObjectShallow(obj);
const processed2 = processObjectDeep(obj);

console.log('unprocessed', JSON.stringify(obj));
// console.log('processed1', JSON.stringify(processed1));
console.log('processed2', JSON.stringify(processed2));
