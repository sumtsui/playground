export async function bulkGetDataInChunk(total: number, chunk: number, asyncFn: (...args: any[]) => Promise<any>) {
  let i = 1;
  let chain = Promise.resolve();

  while (i <= total) {

    const task = asyncFn(i);
    chain = chain.then(() => task);

    if (i % chunk === 0) {
      await chain
        .then(() => output('complete chunk ' + i / chunk));
      chain = Promise.resolve();
    }

    i++;
  }
}

export function bulkGetDataOnce(total: number, asyncFn: (...args: any[]) => Promise<any>, jobName: string) {
  let i = 0;
  let chain = Promise.resolve();

  while (i <= total) {

    const pr = asyncFn(i);
    chain = chain.then(() => pr.then(output).catch(output));

    i++;
  }

  return chain
    .then(() => output(jobName + ' complete!'));
}

function output(arg) {
  console.log('output:', JSON.stringify(arg));
}