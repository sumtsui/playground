function getData(param, isSuccessful = true) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000;
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
  const result = await Promise.all([
    getData(1),
    getDataFail(2).catch((err) => {
      console.log('err getDataFail', err);
      throw err;
    }),
  ]).catch((err) => {
    console.log('err Promise.all', err);
  });

  console.log('result', result);
})();
