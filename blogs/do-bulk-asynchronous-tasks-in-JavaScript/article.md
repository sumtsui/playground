# How to do bulk asynchronous tasks in JavaScript

Let's say we want to make 100 requests to a server to download 100 pictures. For this simple job, we want to achieve:

- These 100 requests will be made asynchronously (non-blocking, one can be made without waiting for the previous one to finish).
- We want to know if each request was successful or failed, so we can log the failed requests or try again with them.
- We should know exactly when all requests finished.

For the purpose of this article, I wrote a `getData` function that makes the request and returns a promise. A simple server answers for GET request to path `/picture?query=XXX` and sends back picture data with a random delay.

So if I call `getData(67)`, the server will send back `{"path":"/picture?query=67","data":"pic67"}`. It is very simple and contrived. Don't worry about the implementation for now, I will link to the repo at the end. 

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

All the logs for each request appears almost the same time on server, so we can tell the tasks were made asynchronously: 

```
GET /picture?query=1 
GET /picture?query=2 
GET /picture?query=3
GET /picture?query=4
......
GET /picture?query=99
GET /picture?query=100
```

and when we got back all the responses, we can see the log by the client's `then` method after `Promise.all`:

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

This is when all requests were successful. But what if some requests fail.
Let's artificially fail every 10 request and see what happen:

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

Look at `pr.then(output).catch(output)`, when I was doing something like this, is when I get a better understanding of the concept Promise. You can really do whatever you want with it, even if it hasn't fulfilled or rejected. And what you do to the promise 

## Breaking large amount of tasks in chunks

Maybe instead of 100 requests, we now need to make 1,000. And we want to do it 100 at a time, to prevent creating too much burden to the server. So this time,

- Each 100 tasks will happen asynchronously.
- When all tasks in the first chunk returned, the next chunk will start.
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

Let's call the function:

```js
bulkGetDataInChunk(1000, 100);
```

We will see the console log like these:

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

## Use a promise chain instead of `Promise.all`

`Promise.all` does the job quite well. But here is another way to make bulk asynchronous calls without it. Maybe it will you understand the concept of Promise even better:

```js
const total = 100;
let i = 1;
let chain = Promise.resolve();

while (i <= total) {
  const pr = i % 10 === 0 ? getDataFail(i) : getData(i);

  chain = chain.then(
    () => pr
      .then(output)
      .catch(output)
  );

  i++;
}

chain.then(() => output('All done!'));
```

Instead of an empty array, we declared a `chain` variable and assign it to a `Promise.resolve()`. It is just served as a "head" to let us chain the tasks to. Inside the `while` loop, we put the `pr` in as a callback to `then` reassign `chain`. Notice how we can push `pr` directly to the array when we were using `Promise.all` but here it has be in a callback function. I don't know the reason but I think it has to do with how `Promise.all` is implemented. Another thing we need to change for this approach is we have to handle promise rejection inside our `getDataFail` function, which you can find in the repo below. The reason for this is explained in this [stack overflow post](https://stackoverflow.com/questions/59060508/how-to-handle-an-unhandled-promise-rejection-asynchronously).

## That is all

Thank you for reading my article. If you find this helpful, let me know, it will encourage me to write more.






