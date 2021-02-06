import { request } from '../request'; 
import fs from 'fs';
import path from 'path';

const picDir = path.resolve(__dirname, '../../downloads');

makeDir(picDir);

getAlbum(34375, 65);

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