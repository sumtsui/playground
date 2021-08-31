const http = require('http');

function output(value, label) {
  console.log(label || 'output', ':', value, '\n');
  return value;
}

function getData(query, makeItFail) {
  const path = makeItFail ? `/not-exist?query=${query}` : `/picture?query=${query}`;

  return request('localhost', path, 2001);
}

function getDataFail(query) {
  return getData(query, true)
    .catch(err => err); // do this to prevent "PromiseRejectionHandledWarning: Promise rejection was handled asynchronously" in promise-chain example
}

function request(hostname, path, port) {
  const options = {
    hostname,
    port,
    path,
    method: 'GET',
  };

  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {

      const data = [];

      res.on('data', (chunk) => {
        data.push(chunk);
      });

      res.on('end', () => {
        const result = Buffer.concat(data)
          .toString();

        if (res.statusCode >= 400) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

exports.getData = getData;
exports.getDataFail = getDataFail; 
exports.output = output; 
