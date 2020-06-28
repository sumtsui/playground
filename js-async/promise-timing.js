/*
execution order:

1. the main stack
2. callback of immediately resolved / rejected promises 
   (bcoz they go into microtask queue first)
3. calllback of other promises
   (bcoz they go into microtask queue later)
4. callback in the job queue

*/

// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// wait().then(() => console.log(4));
// Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
// console.log(1); // 1, 2, 3, 4

const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then(value => {
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    return value;
});
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(() => {
    console.log(thenProm);
});
