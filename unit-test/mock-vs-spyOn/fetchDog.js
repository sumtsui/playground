const https = require('https');

export function getDogWithCallback(cb) {
  const options = {
    hostname: 'dog.ceo',
    port: 443,
    path: '/api/breeds/image/random',
    method: 'GET',
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    const data = [];

    res.on('data', (chunk) => {
      data.push(chunk);
    });

    res.on('end', () => {
      cb(Buffer.concat(data).toString());
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.end();
}

// getDogWithCallback((data) => console.log(data));

function getDogWithPromise(hostname) {
  const options = {
    hostname,
    port: 443,
    path: '/api/breeds/image/random',
    method: 'GET',
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      console.log(`statusCode: ${res.statusCode}`);

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

// getDogWithPromise().then((d) => console.log(d));

export default getDogWithPromise;
