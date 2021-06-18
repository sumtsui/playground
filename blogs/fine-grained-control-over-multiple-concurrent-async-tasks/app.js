const request = require('./request');

function getData(query, makeItFail) {
  const path = makeItFail ? '/not-exist' : `/picture?query=${query}`;

  return request('localhost', path, 2001);
}

function getDataFail(query) {
  return getData(query, true);
}

function output(label) {
  return (val) => {
    console.log(label || 'output', ':', val, '\n');
    return val;
  };
}

// const total = 100;
// let i = 1;
// let chain = Promise.resolve();

// while (i <= total) {
//   const pr = getData(i)
//     .then(output);
//   chain = chain.then(() => pr.then(output)
//     .catch(output));

//   i++;
// }

// chain.then(() => output('all tasks completed!'));

function usePromiseAll() {
  const total = 100;
  let i = 1;
  const promises = [];

  while (i <= total) {
    const pr = i % 10 === 0 ? getDataFail(i) : getData(i);

    promises.push(pr.then(output('request ' + i))
      .catch(output('request ' + i)));

    i++;
  }

  Promise.all(promises)
    .then(output())
    .catch(output());
}

usePromiseAll();
