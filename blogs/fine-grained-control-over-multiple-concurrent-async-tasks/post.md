# How to do bulk asynchrouous tasks in JavaScript

Let's say we want to make 100 requests to a server to download 100 pictures. For this simple job, we want to achieve:

- These 100 requests will be made simultaneously (non-blocking, one doesn't have to wait for the previous one to finish).
- We want to know if the request was successful or failed, so we can log the failed request or try again with them.
- We should know excatly when all requests finished.

I wrote a `getData` function that makes the request and returns a promise. A simple server answers for GET request to path `/picture?query=XXX` and sends back picture data with a random delay.

So if I call `getData(67)`, the server will send back `{"delay":1092.3306112652767,"data":"pic67"}`. Very contrived but it serves the purpose of this article. Don't worry about the implementation for now, I will link to the repo at the end of the article. 

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

We managed to send 100 requests simultaneously. When we got back the response and log them out, we also see the pictures arrived in the order each request was made:

```
output: [
  '{"delay":1226.0998777407979,"data":"pic1"}',
  '{"delay":1092.3306112652767,"data":"pic2"}',
  '{"delay":1389.2451924919885,"data":"pic3"}',
  ......
  '{"delay":429.6262075531407,"data":"pic96"}',
  '{"delay":1792.6771339170289,"data":"pic97"}',
  '{"delay":124.22844434812097,"data":"pic98"}',
  '{"delay":940.8212317776243,"data":"pic99"}',
  '{"delay":645.3907835182613,"data":"pic100"}'
]
```

This is when all requests were successfull. But what if some requests fail.
Let's artifically fail every 10 request and see what happen:

```
  while (i <= total) {
-    const pr = getData(i);
+    const pr = i % 10 === 0 ? getDataFail(i) : getData(i);
```

```
output: Bad Request
```

No successful request is logged out and only the first failed request's response was logged at the `catch` call. This is how `Promise.all` behaves and certainly not what we want. So let's modify the code. This time we will chain a `then` and `catch` on each promise, so we are handling the failed case within each promise.

I also modified the `output` function, letting it return `value` at the end so `Promise.all` can still have something to log. Also I changed the function to a curry to avoid stale closure which will forbid us getting the correct value of `i`. Don't worry about it if you are not familiar with stale closure, it won't prevent you from understanding this article. 

Now the code looks like this:

```js
function output(label) {
  return (value) => {
    console.log(label || 'output', ':', value, '\n');
    return value;
  };
}

const total = 100;
  let i = 1;
  const promises = [];

  while (i <= total) {
    const pr = i % 10 === 0 ? getDataFail(i) : getData(i);

    promises.push(pr.then(output(`request ${i}`))
      .catch(output(`request ${i}`)));

    i++;
  }

  Promise.all(promises)
    .then(output('all tasks completed!'))
    .catch(output());
```

What we got back:

```
......
request 7 : {"delay":679.8964377467431,"data":"pic7"} 
request 45 : {"delay":677.5687652579107,"data":"pic45"} 
request 100 : Bad Request 
request 13 : {"delay":761.2441134836696,"data":"pic13"} 
request 39 : {"delay":765.6005053247741,"data":"pic39"} 
request 60 : Bad Request 
request 72 : {"delay":784.1644175172879,"data":"pic72"} 
request 21 : {"delay":818.9229104903708,"data":"pic21"} 
......

all tasks completed! : [
  ......
  '{"delay":951.2107054696633,"data":"pic7"}',
  '{"delay":958.1445429098596,"data":"pic8"}',
  '{"delay":1523.4516843247916,"data":"pic9"}',
  'Bad Request',
  ......
  '{"delay":429.68207874712226,"data":"pic98"}',
  '{"delay":271.60417455687957,"data":"pic99"}',
  'Bad Request'
]
```

Now we can know exactly each request is succeeded or failed. One thing worth pointing out is the log of each task happened at the time that request was returned thus they were not in order, whereas the last log from `Promise.all` listed all response in order. 

There is another way to achieve these without using `Promise.all`:

```js
const total = 100;
let i = 1;
let chain = Promise.resolve();

while (i <= total) {
  const pr = i % 10 === 0 ? getDataFail(i) : getData(i);

  chain = chain.then(pr.then(output())
    .catch(output()));

  i++;
}
```

What the code does is making a promise chain. Starting from a `Promise.resolve()` and keep chaining new promises one to the other. 

However, with this way, even you add a `chain.then(output('all tasks completed!'));` below the `while` loop. It will still execuate before other async tasks finish. If you want to log when all tasks finish, you can wrap the code in an async function and await the result: 

```js

```
