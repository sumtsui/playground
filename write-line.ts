import fs from 'fs';
const filePath = './attendee-list.csv';
const linesToWrite = [
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,yellow,dog;cow;chicken',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,yes,orange,dog;cow',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
  'John Doe (Example),haochen.xu+test1@eventx.io,Manager,Example Organization,852,12345678,Hong Kong,China,no,,dog',
].map((l, idx) => {
  const [ _, oldEmail, ...rest ] = l.split(',');
  const email = oldEmail.replace(/\d+/, idx.toString());
  return `attendee ${idx},${email},${rest.join(',')}`;
}).join('\n');


fs.appendFile(filePath, linesToWrite, (err) => {
  if (err) throw err;
  console.log('Lines appended to file!');
});

