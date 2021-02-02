const https = require('https');

function getDog(num) {
  const options = {
    hostname: 'dog.ceo',
    port: 443,
    path: `/api/breeds/image/random/${num}`,
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

// getDog(10).then((d) => console.log(d));

export default getDog;
