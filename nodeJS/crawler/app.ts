import { request, requestHttp } from '../request';
import fs from 'fs';
import path from 'path';

const picDir = path.resolve(__dirname, '/Users/sum/Pictures');

// makeDir(picDir);

// getAlbum(33582, 48, picDir);

(async function () {
  await getAllAlbumsByModel([
    '36253',
    '33249',
    '33249',
    '32317',
    '13538',
    '26990'
  ], '兔子');
  // await getAlbum(10105, 69, picDir);
})();

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

function bulkGetDataOnce(total: number, asyncFn: (...args: any[]) => Promise<any>, jobName: string) {
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

async function getAllAlbumsByModel(albums: string[], modelName: string) {
  const dirPath = picDir + '/' + modelName;
  makeDir(dirPath);
  let alTotal = 0;

  for (const num of albums) {
    await getAlbum(parseInt(num), 100, dirPath).catch(err => console.log('error occurred in getAlbum', num, err));
    alTotal++;
  }

  output('get ' + alTotal + ' albums done for ' + modelName);
}

function getAlbum(albumNum: number, totalPicNum: number, dirPath: string) {
  const albumPath = dirPath + '/' + albumNum;
  makeDir(albumPath);
  return bulkGetDataOnce(totalPicNum, (picNum) => getPicture(picNum, albumNum, albumPath), albumNum.toString());
}

function getPicture(picNum: number, albumNum: number, albumPath: string) {
  const picName = `${picNum}.jpg`;

  return Promise.race([
    request('tjg.hywly.com', `/a/1/${albumNum}/${picNum}.jpg`)
      .then((response) => {
        return saveFile(albumPath + '/' + picName, response);
      })
      .catch(err => {
        return err;
      }),
    new Promise((_, reject) => {
      setTimeout(() => {
        reject('timeout downloading ' + picName);
      }, 5000);
    }),
  ]);
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

function saveFile(filePath: string, data) {
  return new Promise((resolve, reject) => {
    return fs.writeFile(filePath, data, function (err) {
      if (err) {
        err.code = 'save file failed: ' + filePath; 
        return reject(err);
      }
      return resolve(`save file successfully ${filePath}`);
    });
  });
}