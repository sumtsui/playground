function getFile(data) {
  // const delay = Math.random() * 5000;
  const delay = 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

function output(arg) {
  console.log(arg);
}

/**
 * helper for chaining promises
 */
(function () {
  ['file1', 'file2', 'file3']
    .map(getFile)
    .reduce((chain, pr) => {
      return chain.then(() => pr)
        .then(output);
    }, Promise.resolve())
    .then(() => output('complete'));
  // })();
});

/**
 * manually set a timeout for async function
 */
(async function () {
  const result = await Promise.race([
    getFile('myfile'),
    new Promise((_, reject) => {
      setTimeout(() => {
        reject('timeout!!');
      }, 100);
    }),
  ]);
  // .then(success, error);

  function success() {
    output('success');
  }

  function error() {
    output('error');
  }

  output('result ' + result);
})();
// });

