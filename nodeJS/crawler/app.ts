import { request, requestHttp } from '../request';
import fs from 'fs';
import path from 'path';

const picDir = path.resolve(__dirname, '/Users/sum/Pictures');

// makeDir(picDir);

// getAlbum(33631, 63);

(async function () {
  await bulkGetData(300, 50);
})();

function output(arg) {
  console.log(arg.toString());
  return Promise.resolve();
}

function getData(query: number) {
  return requestHttp('localhost', `/hello?query=${query}`, 2001)
    .then(output)
    .catch(err => console.error(err));
}

async function bulkGetData(total: number, chunk: number) {
  let works = [];

  let i = 1;

  while (i <= total) {
    works.push(i);

    if (i % chunk === 0) {
      // await works
      //   .map(getData)
      //   .reduce((chain, pr) => {
      //     return chain.then(() => pr).then(output);
      //   }, Promise.resolve())
      //   .then(() => output('complete chunk ' + i / chunk));

      await Promise
        .all(works.map(getData))
        .then(() => output('complete chunk ' + i / chunk));
      works = [];
    }

    i++;
  }
}

function getAlbum(albumNum: number, totalPicNum: number) {
  makeDir(picDir + '/' + albumNum);

  let i = 0;

  while (i <= totalPicNum) {
    getPicture(i, albumNum);
    i++;
  }
}

function getPicture(picNum: number, albumNum: number) {
  const picName = `${picNum}.jpg`;

  request('tjg.hywly.com', `/a/1/${albumNum}/${picNum}.jpg`)
    .then((response) => {
      fs.writeFile(picDir + '/' + albumNum + '/' + picName, response, function (err) {
        if (err) return console.log('fail to save file:', err);
        console.log(`successfully saved ${picName}`);
      });
    })
    .catch(error => {
      console.log(`fail to download ${picName}:`, error);
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