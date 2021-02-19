/* eslint-disable no-unused-expressions */
/**
 * Thunk:
 * A function that has everything it needs to give you some value back.
 * you don't need to pass in anything, simply call it.
 */

/**
 * synchronous thunk
 */
(function () {
  function add(x, y) {
    return x + y;
  }

  const thunk = function () {
    return add(10, 15);
  };

  console.log(thunk());
  // })();
});

/**
 * async thunk
 * the only thing it needs is a callback to get the value out
 */
(function () {
  function addAsync(x, y, cb) {
    setTimeout(() => {
      cb(x + y);
    }, 1000);
  }

  // const thunk = function (cb) {
  //   addAsync(10, 15, cb);
  // };

  // create thunk with makeThunk util
  const thunk = makeThunk(addAsync, 10, 15);

  thunk(function (sum) {
    console.log(sum);
  });

  /**
   * the thunk wraps the asynchronousity, so profound
   */

  function getData(val, cb) {
    setTimeout(() => {
      cb(val);
    }, 1000);
  }

  const get10 = makeThunk(getData, 10);
  const get30 = makeThunk(getData, 30);

  get10(function (num1) {
    const x = 1 + num1;
    get30(function (num2) {
      const y = 1 + num2;

      const getAnswer = makeActiveThunk(getData, 'Meaning of life: ' + (x + y));

      getAnswer(function (answser) {
        console.log(answser);
      });
    });
  });
  // })();
});

/**
 * this thunk is lazy
 * because the fn it takes, which is the async call
 * will not get call when this thunk is invoked.
 */
function makeThunk(fn) {
  const args = [].slice.call(arguments, 1);
  return function (cb) {
    args.push(cb);
    fn.apply(null, args);
  };
}

// es6 version
// function makeThunk(fn, ...args) {
//   return function (cb) {
//     args.push(cb);
//     fn(...args);
//   };
// }

/**
 * this thunk is active.
 */
function makeActiveThunk(asyncFn) {
  let data, fn;

  const args = [].slice.call(arguments, 1); // file

  args.push(function (resp) {
    if (fn) fn(resp);
    else data = resp;
  });

  asyncFn.apply(null, args); // fakeAjex(file)

  return function (cb) {
    if (data) cb(data);
    else fn = cb;
  };
}

// es6 version
// function makeActiveThunk(asyncFn, ...args) {
//   let data, fn;

//   args.push(function (resp) {
//     if (fn) fn(resp);
//     else data = resp;
//   });

//   asyncFn(...args);

//   return function (cb) {
//     if (data) cb(data);
//     else fn = cb;
//   };
// }

(function () {
  function getFile(val, cb) {
    setTimeout(() => {
      cb(val);
    }, 1000);
  }

  const task1 = makeActiveThunk(getFile, 1);
  const task2 = makeActiveThunk(getFile, 2);
  const task3 = makeActiveThunk(getFile, 3);

  task1((res1) => {
    console.log('res1', res1);
    task2((res2) => {
      console.log('res2', res2);
      task3((res3) => {
        console.log('res3', res3);
      });
    });
  });
})();
