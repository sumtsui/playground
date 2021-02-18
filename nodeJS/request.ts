const https = require('https');

export function request(hostname: string, path: string): Promise<Buffer> {
  const options = {
    hostname,
    port: 443,
    path,
    method: 'GET',
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      console.log(`statusCode: ${res.statusCode}`);

      if (res.statusCode >= 400) {
        reject(res.statusMessage);
      }

      const data = []; 

      res.on('data', (chunk) => {
        data.push(chunk);
      });

      res.on('end', () => {
        resolve(Buffer.concat(data));
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

export function requestWithStream(hostname: string, path: string) {
  const options = {
    hostname,
    port: 443,
    path,
    method: 'GET',
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    const data = [];

    res.on('data', (chunk) => {
      process.stdout.write(chunk);
    });

    res.on('end', () => {
      console.log('end');
    });
  });

  req.on('error', (error) => {
    console.log('error', error);
  });

  req.end();
}
