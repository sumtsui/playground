function job(data) {
  const delay = Math.random() * 2000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

async function doJobs() {
  const result1 = job(1);
  const result2 = job(2);

  const final = (await result1) + (await result2);

  console.info('result >>>', final);
}

doJobs();
