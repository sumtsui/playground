function convertToTitle(columnNumber) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
  let num = columnNumber, base = 26, arr = [];
    
  while (num > 0) {
    const d = ~~(num / base);
    const r = num % base;

    num = r === 0 ? d - 1 : d;
    arr.push(r === 0 ? 26 : r);
  }
    
  console.log('arr', arr);

  let result = arr.reverse().reduce((accu, cur) => (accu += letters[cur-1]), '');
  return result;
}

console.log(convertToTitle(1000));