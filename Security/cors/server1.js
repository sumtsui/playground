const http = require('http');
const fs = require('fs');

const HTTP_PORT = 2001;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, req.headers, '\n\n');

  if (req.url.includes('script')) {
    res.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age: 0, no-cache',
    });

    fs.createReadStream('script1.js').pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Cache-Control': 'max-age: 0, no-cache',
    });

    fs.createReadStream('index1.html').pipe(res);
  }
});

function main() {
  server.listen(HTTP_PORT);
  console.log(`Listening on http://localhost:${HTTP_PORT}...`);
}

main();
