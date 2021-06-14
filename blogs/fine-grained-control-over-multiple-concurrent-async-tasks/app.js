const request = require('./request');

function getData(query) {
  return request('localhost', `/picture?query=${query}`, 2001);
}

function output(arg) {
  console.log('output:', arg.toString(), '\n');
}

const total = 100;
let i = 1;
let chain = Promise.resolve();

while (i <= total) {
  const pr = getData(i);
  chain = chain.then(() => pr.then(output).catch(output));

  i++;
}

chain.then(() => output('all tasks completed!'));
