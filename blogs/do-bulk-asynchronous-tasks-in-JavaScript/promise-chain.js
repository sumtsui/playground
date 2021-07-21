const { getData, getDataFail, output } = require('./utils');

function bulkGetData() {
  const total = 100;
  let i = 1;
  let chain = Promise.resolve();

  while (i <= total) {
    const pr = i % 10 === 0 ? getDataFail(i) : getData(i);

    chain = chain.then(
      () => pr
        .then(output)
        .catch(output)
    );

    i++;
  }

  return chain.then(() => output('All done!'));
}

bulkGetData();
