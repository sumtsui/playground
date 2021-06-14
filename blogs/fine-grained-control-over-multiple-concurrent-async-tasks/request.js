const http = require('http');

function requestWithPromise(hostname, path, port) {
  const options = {
    hostname,
    port,
    path,
    method: 'GET',
  };

  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      if (res.statusCode >= 400) {
        reject(res.statusMessage);
      }

      const data = [];

      res.on('data', (chunk) => {
        data.push(chunk);
      });

      res.on('end', () => {
        resolve(Buffer.concat(data).toString());
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

module.exports = requestWithPromise;
