const requestHttp = require('./requestHttp');

function getData(query) {
  return requestHttp('localhost', `/picture?query=${query}`, 2001);
  // .then(output)
  // .catch(err => console.error(err));
}

function output(arg) {
  console.log('output:', arg.toString(), '\n');
}

// bulkGetDataOnce(100, getData, 'getData');

// getData(1).then((res) => console.log('response', res, '\n\n'));
const total = 100;
let i = 1;
let chain = Promise.resolve();

while (i <= total) {
  const pr = getData(i);
  chain = chain.then(() => pr.then(output).catch(output));

  i++;
}

chain.then(() => output('all tasks completed!'));
