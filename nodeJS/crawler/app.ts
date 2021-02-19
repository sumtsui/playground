import { request, requestHttp } from '../request';
import fs from 'fs';
import path from 'path';

const picDir = path.resolve(__dirname, '/Users/sum/Pictures');

// makeDir(picDir);

getAlbum(33582, 48);

// (async function () {
// await bulkGetDataInChunk(300, 50, getData);
// await bulkGetDataInChunk2(22, 4, getData);
// })();

function output(arg) {
  console.log('output:', JSON.stringify(arg));
}

function getData(query: number) {
  return requestHttp('localhost', `/hello?query=${query}`, 2001)
    .then(output)
    .catch(err => console.error(err));
}

async function bulkGetDataInChunk(total: number, chunk: number, asyncFn: (...args: any[]) => Promise<any>) {
  let works = [];

  let i = 1;

  while (i <= total) {
    works.push(i);

    if (i % chunk === 0) {
      await works
        .map(asyncFn)
        .reduce((chain, pr) => {
          return chain.then(() => pr).then(output);
        }, Promise.resolve())
        .then(() => output('complete chunk ' + i / chunk));

      // await Promise
      //   .all(works.map(getData))
      //   .then(() => output('complete chunk ' + i / chunk));
      works = [];
    }

    i++;
  }
}

async function bulkGetDataInChunk2(total: number, chunk: number, asyncFn: (...args: any[]) => Promise<any>) {
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

function bulkGetDataOnce(total: number, asyncFn: (...args: any[]) => Promise<any>) {
  let i = 1;
  let chain = Promise.resolve();

  while (i <= total) {

    const pr = asyncFn(i);
    chain = chain.then(() => pr.then(output).catch(output));

    i++;
  }

  chain
    .then(() => output('complete!'));
}

function getAlbum(albumNum: number, totalPicNum: number) {
  makeDir(picDir + '/' + albumNum);
  bulkGetDataOnce(totalPicNum, (picNum) => getPicture(picNum, albumNum));
}

function getPicture(picNum: number, albumNum: number) {
  const picName = `${picNum}.jpg`;

  return request('tjg.hywly.com', `/a/1/${albumNum}/${picNum}.jpg`)
    .then((response) => {
      return new Promise((resolve, reject) => {
        return fs.writeFile(picDir + '/' + albumNum + '/' + picName, response, function (err) {
          if (err) {
            err.code = 'save file failed: ' + picName; 
            return reject(err);
          }
          return resolve(`save file successfully ${picName}`);
        });
      });
    })
    .catch(err => {
      return err;
    });
}

function makeDir(dirname: string) {
  try {
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname);
    }
  } catch (err) {
    console.error(err);
  }
}