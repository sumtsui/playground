function generate(numRows) {
  let row = 1;
  let result = [];
    
  while (row <= numRows) {
    const subArr = [];
    let i = 0;

    while (i < row) {
      if (i === 0 || i === row - 1) subArr.push(1);
      else {
        const preSubArr = result[row-2];
        subArr.push(preSubArr[i-1] + preSubArr[i]);
      }
      i++;
    }
        
    result.push(subArr);
        
    row++;
  }
    
  return result;
}

generate(3);