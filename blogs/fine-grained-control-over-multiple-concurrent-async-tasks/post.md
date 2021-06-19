# How to do bulk asynchrouous tasks in JavaScript

Let's say we want to make 100 requests to a server to download 100 pictures. For this simple job, we want to achieve:

- These 100 requests will be made asynchrouously (non-blocking, one can be made without waiting for the previous one to finish).
- We want to know if the request was successful or failed, so we can log the failed request or try again with them.
- We should know excatly when all requests finished.

I wrote a `getData` function that makes the request and returns a promise. A simple server answers for GET request to path `/picture?query=XXX` and sends back picture data with a random delay.

So if I call `getData(67)`, the server will send back `{"path":"/picture?query=71","data":"pic67"}`. Very contrived but it serves the purpose of this article. Don't worry about the implementation for now, I will link to the repo at the end of the article. 

To meet our expectation, let's try `Promise.all`:

```js
function output(value, label) {
  console.log(label || 'output', ':', value, '\n');
}

const total = 100;
let i = 1;
const promises = [];

while (i <= total) {
  const pr = getData(i);

  promises.push(pr);
  i++;
}

Promise.all(promises)
  .then(output)
  .catch(output);
```

Look at the server output:

```
GET /picture?query=1 
GET /picture?query=2 
GET /picture?query=3
GET /picture?query=4
......
GET /picture?query=99
GET /picture?query=100
```

We managed to send 100 requests simultaneously. When we got back all the responses, we see the console log by the `then` method of `Promise.all`:

```
output : [
  '{"path":"/picture?query=1","data":"pic1"}',
  '{"path":"/picture?query=2","data":"pic2"}',
  '{"path":"/picture?query=3","data":"pic3"}',
  '{"path":"/picture?query=4","data":"pic4"}',
  '{"path":"/picture?query=5","data":"pic5"}',
  ......
  '{"path":"/picture?query=14","data":"pic98"}',
  '{"path":"/picture?query=15","data":"pic99"}',
  '{"path":"/picture?query=16","data":"pic100"}'
]
```

This is when all requests were successfull. But what if some requests fail.
Let's artifically fail every 10 request and see what happen:

```js
  while (i <= total) {
-    const pr = getData(i);
+    const pr = i % 10 === 0 ? getDataFail(i) : getData(i);
```

```
output : {"path":"/not-exist?query=60","error":"Bad Request"}
```

No successful request is logged out and only the first failed request that came back was logged at the `catch` call. This is how `Promise.all` behaves and certainly not what we want. So let's modify the code. This time we will chain a `then` and `catch` on each promise, so we are handling the failed case within each promise.

Now the code looks like this:

```js
const total = 100;
let i = 1;
const promises = [];

while (i <= total) {
  const pr = i % 10 === 0 ? getDataFail(i) : getData(i);

  promises.push(
    pr
+     .then(output)
+     .catch(output)
  );

  i++;
}

Promise.all(promises)
  .then(output)
  .catch(output);
```

What we got back:

```
output : {"path":"/picture?query=9","data":"pic9"} 

output : {"path":"/picture?query=89","data":"pic89"} 

output : {"path":"/not-exist?query=40","error":"Bad Request"} 

output : {"path":"/picture?query=26","data":"pic26"} 

......

output : {"path":"/picture?query=23","data":"pic23"} 

output : {"path":"/not-exist?query=50","error":"Bad Request"} 

output : {"path":"/picture?query=51","data":"pic51"} 
```

Now we can know exactly each request is succeeded or failed. One thing worth pointing out is the log of each task happened at the time that request was returned thus they were not in order, whereas the last log from `Promise.all` listed all response in order.

## Breaking large amount of tasks in chunks

Maybe instead of 100 requests, we now need to make 1,000. And we want to do it 100 at a time, to prevent creating too much burden to the server. So this time,

- Each 100 tasks will happen asynchrouously.
- When all tasks in the fisrt chunk returned, the next chunk will start.
- We should log at the end of each chunk so we know the progress.

This time, let's use `async/await`. I will put the code in a function:

```js
async function bulkGetDataInChunk(total, chunk) {
  let i = 1;
  let promises = [];

  while (i <= total) {

    const pr = getData(i);
    promises.push(
      pr
        .then(output)
        .catch(output)
    );

    if (i % chunk === 0) {
      await Promise.all(promises)
        .then(() => output('complete chunk ' + i / chunk));
      promises = [];
    }

    i++;
  }

  output('All done!');
}
```

The code is similar as before, only difference is a condition `if (i % chunk === 0)` to break tasks into chunk, and we `await` the `Promise.all` of that chunk to finish, then log, then we clear the `promises` array for the next chunk.

Calls the function and we will see the console log like these:

```
......

output : complete chunk 8 

output : {"path":"/picture?query=84","data":"pic84"} 

output : {"path":"/not-exist?query=90","error":"Bad Request"} 

......

output : {"path":"/picture?query=82","data":"pic82"} 

output : {"path":"/picture?query=89","data":"pic89"} 

output : {"path":"/picture?query=85","data":"pic85"} 

output : complete chunk 9 

output : {"path":"/picture?query=96","data":"pic96"} 

output : {"path":"/not-exist?query=100","error":"Bad Request"} 

......

output : {"path":"/picture?query=94","data":"pic94"} 

output : {"path":"/picture?query=98","data":"pic98"} 

output : {"path":"/picture?query=95","data":"pic95"} 

output : complete chunk 10 

output : All done!
```