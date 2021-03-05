const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, '\n');

  if (req.method === 'GET') {
    if (/\/picture\b/.test(req.url)) {
      const delay = Math.random() * 2000;
      // const delay = 2000;
      const response = {
        delay,
        data: 'pic' + url.parse(req.url, true).query.query,
      };
      res.writeHead(200);
      setTimeout(() => res.end(JSON.stringify(response)), delay);
    } else {
      res.writeHead(400);
      res.end('wasup');
    }
  }
});

const HTTP_PORT = 2001;

function main() {
  server.listen(HTTP_PORT);
  console.log(`Listening on http://localhost:${HTTP_PORT}...`);
}

main();
