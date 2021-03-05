# Having fine-grained control over asynchrouous tasks in JavaScript

Let's say we want to make 100 requests to a server to download 100 pictures. For this simple job, what we want to achieve are:

- These 100 requests will be made simultaneously.
- When each request finished, we want to know if the request was successful or failed.
- We should know excatly when all request finished.

For the purpose of this article, I wrote a `requestHttp` function which makes http request and returns a promise. I wrapped this `requestHttp` function with a `getData` function passes in the hostname, path, and port. `getData` takes an argument `query` that I will simply put it in the request url.

You can find the implementation of `requestHttp` in the repo at the end of this article. 3rd party libraries like Axios also works.

```js
// getData.js
function getData(query) {
  return requestHttp('localhost', `/picture?query=${query}`, 2001);
}

getData(1).then((res) => console.log('response', res, '\n\n'));
```

I also wrote a very simple web server with vanilla NodeJS that only answer for GET request to path `/picture`. I did an artificial delay on the response. When a request comes in, the server will wait a little, and sends back the delay along with the picture asked for. Very contrived, I know. But it is just a demo.

```js
// server.js
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, '\n\n');

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
```

If we launch the server in one terminal session with `node server.js`, and run `node getData.js` in anther, we get our picture no.1 back. The set up is done. Now let's get all 100 pictures.

To meet our expectation, we can do this:

```js
const total = 100;
let i = 1;
let chain = Promise.resolve();

while (i <= total) {
  const pr = getData(i);
  chain = chain.then(() => pr.then(output).catch(output));

  i++;
}

chain.then(() => output('all tasks completed!'));
```
