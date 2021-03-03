import fs from 'fs';

export function saveFile(filePath: string, data): Promise<string> {
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

export function makeDir(dirname: string): void {
  try {
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname);
    }
  } catch (err) {
    console.error(err);
  }
}