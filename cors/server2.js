const http = require("http");
const fs = require('fs')

const HTTP_PORT = 2002;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, req.headers, '\n\n');
  
  if (req.url.includes('data')) {
    res.writeHead(200,{
        "Content-Type": "application/json",
        "Cache-Control": "max-age: 0, no-cache",
        "Access-Control-Allow-Origin": "http://localhost:2001",
        "Access-Control-Allow-Credentials": true
      });
    res.end(JSON.stringify({message: 'cool from server 2'}));
  }
  
  else if (req.url.includes('auth')) {
    res.writeHead(200, {
      "Set-Cookie": ['access_token=new_token_ebia*@dddq#@abjaljsdlajekdkdkdk#1', 'something_else=cool'],
      "Content-Type": "application/json",
      "Cache-Control": "max-age: 0, no-cache",
    })
    res.end(JSON.stringify({message: 'auth'}));
  }

  else {
    res.end('no match path')
  }
})


function main() {
	server.listen(HTTP_PORT);
	console.log(`Listening on http://localhost:${HTTP_PORT}...`);
}

main()