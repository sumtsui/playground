function send(data) {
  const delay = 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('sent', data);
      resolve(data);
    }, delay);
  });
}

const promises = [ 1,2,3 ].map((email) => () => send(email));
console.log('promises', promises);

Promise.all(promises);

