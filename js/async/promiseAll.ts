function getData(param, isSuccessful = true) {
  return new Promise((resolve, reject) => {
    // const delay = Math.random() * 2000;
    const delay = 100;
    setTimeout(() => {
      if (isSuccessful) resolve(param);
      else reject(param);
    }, delay);
  });
}

function getDataFail(param) {
  return getData(param, false);
}

const someSideEffects: any[] = [];

function doSideEffect(param: { payload: any, delay: number, shouldFail?: boolean }) {
  const { payload, delay, shouldFail } = param;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) return reject(payload);
      someSideEffects.push(payload);
      resolve(payload);
    }, delay);
  });
}

(async () => {
  const result = await Promise.allSettled([
    doSideEffect({ payload: 1, delay: 100 }),
    doSideEffect({ payload: 2, delay: 100 }),
    doSideEffect({ payload: 3, delay: 10, shouldFail: true })
  ]);
  // .catch((err) => {
  //   console.log('sideEffects', someSideEffects);
  //   throw err;
  // });

  console.log('result', result);
})();

// If multiple tasks fail in Promise.all,
// only one of the errors will be passed to catch()
// (async () => {
//   const result = await Promise.all([
//     getData(1),
//     getData(2),
//     getDataFail(3)
//       .catch((err) => {
//         console.log('err getDataFail', err);
//         // throw err;
//       }),
//   ])
//     .catch((err) => {
//       console.log('err Promise.all', err);
//       // throw err;
//     });

//   console.log('result', result);
// })();


// If an error is thrown in a catch method, the execuation flow will be terminated.
// (async () => {
//   const result = await Promise.all([
//     getData(1),
//     getDataFail(2)
//       .catch((err) => {
//         console.log('err getDataFail', err);
//         throw err;
//       }),
//   ])
//     .catch((err) => {
//       console.log('err Promise.all', err);
//       throw err;
//     });

//   console.log('result', result);
// })();

// console.log('outside iife');