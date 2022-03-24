import { request } from '../async/request';
import { saveFile, makeDir } from '../async/saveFile';
import { bulkGetDataInChunk } from '../async/asyncBulk';
import * as path from 'path';

const MAIN_DIR = path.resolve(__dirname, '/Users/sum/Downloads');

const [ , , ...args ] = process.argv;

console.log('args', args);

const fileDir = MAIN_DIR + '/bgg';
const url = 'https://boardgamegeek.com/boardgame/';
const total = 100;
const chunk = 10;

makeDir(fileDir);
getBoardgames();

function getBoardgame(idx: number) {
  // console.log(url + idx + '');
  // return Promise.race([
  //   request(url, idx + '')
  //     .then((response) => {
  //       console.log(response);
  //       return;
  //     })
  //     .catch(err => {
  //       return err;
  //     }),
  //   new Promise((_, reject) => {
  //     setTimeout(() => {
  //       reject('timeout downloading ' + idx);
  //     }, 5000);
  //   }),
  // ]);

  // return Promise.resolve('ok');
  return request(url, idx + '')
    .then((response) => {
      console.log(response);
      return Promise.resolve();
    })
    .catch(err => {
      return err;
    });
}

function getBoardgames() {
  bulkGetDataInChunk(total, chunk, getBoardgame);
}