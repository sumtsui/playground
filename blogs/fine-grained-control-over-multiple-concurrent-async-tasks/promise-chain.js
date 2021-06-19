const { getData, getDataFail } = require('./utils');  

function output(value, label) {
  console.log(label || 'output', ':', value, '\n');
  return value;
}

async function promiseChain() {
  const total = 100;
  let i = 1;
  let chain = Promise.resolve();

  while (i <= total) {
    const pr = i % 10 === 0 ? getDataFail(i) : getData(i);
    // const pr = getData(i);

    chain = chain.then(
      () => pr
        .then(output())
        .catch(output())
    );

    i++;
  }

  chain.then(output('all finished!'));
}

function promiseAll() {
  const total = 100;
  let i = 1;
  const promises = [];

  while (i <= total) {
    // const pr = i % 10 === 0 ? getDataFail(i) : getData(i);
    const pr = getData(i);

    promises.push(
      pr
      // .then(output)
      // .catch(output)
    );

    i++;
  }

  return Promise.all(promises)
    .then((res) => output(res));
}

// promiseAll();
// promiseChain();

(async () => {
  await promiseAll();

  output('end!');
})();
