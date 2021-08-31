const { getData, getDataFail, output } = require('./utils');  

function bulkGetData() {
  const total = 100;
  let i = 1;
  const promises = [];

  while (i <= total) {
    const pr = i % 10 === 0 ? getDataFail(i) : getData(i);
    // const pr = getData(i);

    promises.push(
      pr
        .then(output)
        .catch(output)
    );

    i++;
  }

  return Promise.all(promises)
    .then(output)
    .then(() => output('All done!'))
    .catch(output);
}

async function bulkGetDataInChunk(total, chunk) {
  let i = 1;
  let promises = [];

  while (i <= total) {

    const pr = i % 10 === 0 ? getDataFail(i) : getData(i);
    promises.push(
      pr
        .then(output)
        .catch(output)
    );

    if (i % chunk === 0) {
      await Promise.all(promises)
        .then(() => output('complete chunk ' + i / chunk));
      promises = [];
    }

    i++;
  }
  
  output('All done!');
}

bulkGetData();
// bulkGetDataInChunk(100, 10);

