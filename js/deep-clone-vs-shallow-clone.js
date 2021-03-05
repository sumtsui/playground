const _ = require('lodash');

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
// const processed2 = processObjectDeep(obj);

// console.log('unprocessed', JSON.stringify(obj));
// // console.log('processed1', JSON.stringify(processed1));
// console.log('processed2', JSON.stringify(processed2));

const obj = {
  a: {
    a0: 10,
    a1: 20,
    a3: {
      d0: 3,
      d1: 12,
    },
  },
  b: {
    b0: 10,
    b1: 20,
    b2: [{ e0: 23 }, 1000],
  },
  c: 123,
};

// https://javascript.plainenglish.io/write-a-better-deep-clone-function-in-javascript-d0e798e5f550
function deepClone(node) {
  if (typeof node === 'object') {
    const temp = Array.isArray(node) ? [] : {};

    Object.keys(node).forEach((k) => {
      temp[k] = deepClone(node[k]);
    });
    return temp;
  } else {
    return node;
  }
}

const result = deepClone(obj);

console.log('result', JSON.stringify(result, null, 4));
