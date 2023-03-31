function asyncFunc(data) {
  // const delay = Math.random() * 5000;
  const delay = 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}


async function main() {
  const arr = [ 1,2,3 ];
  
  for (const data of arr) {
    const result = await asyncFunc(data);
    console.log('result', result);
  }
  
  console.log('done!');
}

main();


