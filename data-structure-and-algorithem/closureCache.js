const times10 = (n) => n * 10;
const times100 = (n) => n * 100;

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosure = (callback) => {
  const cache = {};

  return function (n) {
    console.log(cache);
    if (cache[n]) {
      console.log('do not have to calculate!');
      return cache[n];
    } else {
      console.log('do the hard work!');
      cache[n] = callback(n);
      return cache[n];
    }
  };
};

const memoizedTimes10 = memoizedClosure(times10);
const memoizedTimes100 = memoizedClosure(times100);
console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
try {
  console.log('Task 4 calculated value:', memoizedTimes10(9)); // calculated
  console.log('Task 4 cached value:', memoizedTimes10(9)); // cached
  console.log('Task 4 cached value:', memoizedTimes10(9)); // cached
  console.log('Task 4 cached value:', memoizedTimes100(9)); // cached
  console.log('Task 4 cached value:', memoizedTimes100(9)); // cached
} catch (e) {
  console.error('Task 4:', e);
}
