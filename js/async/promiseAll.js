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

(async () => {
  const result = await getDataFail('bad');

  console.log('result', result);
})();

// If multiple tasks fail in Promise.all,
// only one of the errors will be passed to catch()
(async () => {
  const result = await Promise.all([
    getDataFail(1),
    getDataFail(2),
    getDataFail(3)
    // .catch((err) => {
    //   console.log('err getDataFail', err);
    //   throw err;
    // }),
  ])
    .catch((err) => {
      console.log('err Promise.all', err);
      // throw err;
    });

  console.log('result', result);
})();


// If an error is thrown in a catch method, the execuation flow will be terminated.
(async () => {
  const result = await Promise.all([
    getData(1),
    getDataFail(2)
      .catch((err) => {
        console.log('err getDataFail', err);
        throw err;
      }),
  ])
    .catch((err) => {
      console.log('err Promise.all', err);
      throw err;
    });

  console.log('result', result);
})();

console.log('outside iife');