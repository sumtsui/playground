function getFile(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('file: ' + data);
      console.log('done', data);
    }, delay);
  });
}

(async function() {
  // await Promise.all([ 3000,2000,1000 ].map(async (item) => {
  //   const result = await getFile(item, item);

  //   console.log('result', item, result);
  // }));
  // [ 3000,2000,1000 ].map(async (item) => {
  //   const result = await getFile(item, item);

  //   console.log('result', item, result);
  // });
  // for (const chunk of [ [ 3000, 3000, 1000 ], [ 2000, 2000 ], [ 1000, 1000 ] ]) {
  //   await Promise.all(chunk.map(async item => {
  //     const result = await getFile(item, item);
  //     console.log('result', item, result);
  //   }));
  // }

  const result = await Promise.all([ 1,2,3 ].map(getFile));
  // console.log('result', result);
  // for (const job of [ 1,2,3 ]) {
  //   await getFile(job);
  // }

})();
