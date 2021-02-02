const fs = require('fs');

// fs.readFile('/Users/sumtsui/Downloads/test text.rtf', (err, files) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log('files', files)

// })

const stream = fs.createReadStream('/Users/sumtsui/Downloads/test text.rtf');

stream.on('data', (data) => {
  console.log('data', data.toString());
});
