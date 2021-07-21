const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, '\n');
  const query = url.parse(req.url, true).query;
  const delay = Math.random() * 2000;

  if (req.method === 'GET') {
    if (/\/picture\b/.test(req.url)) {
      const response = {
        path: req.url,
        data: 'pic' + query.query,
      };

      res.writeHead(200);
      setTimeout(() => res.end(JSON.stringify(response)), delay);
    } else {
      const response = {
        path: req.url,
        error: 'Bad Request',
      };

      res.writeHead(400);
      setTimeout(() => res.end(JSON.stringify(response)), delay);
    }
  }
});

const HTTP_PORT = 2001;

function main() {
  server.listen(HTTP_PORT);
  console.log(`Listening on http://localhost:${HTTP_PORT}...`);
}

main();
