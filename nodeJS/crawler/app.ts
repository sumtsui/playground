import { request, requestHttp } from '../request';
import fs from 'fs';
import path from 'path';

const picDir = path.resolve(__dirname, '/Users/sum/Pictures');

// makeDir(picDir);

// getAlbum(33631, 63);

bulkGetData();

function getData(query: number) {
  requestHttp('localhost', `/hello?query=${query}`, 2001).then(res => console.log(res.toString())).catch(err => console.log(err));
}

function bulkGetData() {
  const total = 1000;
  const chunk = 50;
  const allWorks = [];
  let work = null;

  let i = 0;

  while (i < total) {
    if (i % chunk === 0) {
      work = [];
      allWorks.push(work);
    }
    const thunk = makeThunkOfActiveLazy(getData, i);
    work.push(thunk);
    i++;
  }
  
  Promise.all(allWorks[0]).then(res => console.log('res', res));
}

function makeThunk(fn, ...args) {
  return function (cb) {
    args.push(cb);
    fn(...args);
  };
}

function makeThunkOfActiveLazy(asyncFn, ...args) {
  let data, fn;

  args.push(function (resp) {
    if (fn) fn(resp);
    else data = resp;
  });

  asyncFn(...args);

  return function (cb) {
    if (data) cb(data);
    else fn = cb;
  };
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