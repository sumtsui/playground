import { saveFile, makeDir } from '../async/saveFile';
import { bulkGetDataOnce, bulkGetDataInChunk } from '../async/asyncBulk';
import path from 'path';
import axios from 'axios';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const MAIN_DIR = path.resolve(__dirname, '/Users/sum/Downloads');

// const [ , , ...args ] = process.argv;

// console.log('args', args);

const fileDir = MAIN_DIR + '/bgg';
const url = 'https://boardgamegeek.com/boardgame/';
const total = 20;
const chunk = 10;

makeDir(fileDir);
getBoardgames();

function getBoardgame(idx: number) {
  return axios.get(url + idx).then(res => {
    const dom = new JSDOM(res.data);
    console.log(dom.window.document.querySelector('title').textContent);
  });
}

function getBoardgames() {
  bulkGetDataInChunk(total, chunk, getBoardgame);
  // bulkGetDataOnce(2, getBoardgame);
}