function reverse(x) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
    
  let result = 0;
    
  while (x !== 0) {
    let pop = x % 10;
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
    if (result > MAX / 10 || (result === MAX / 10 && pop > 7)) return 0;
    if (result < MIN / 10 || (result === MIN / 10 && pop < -8)) return 0;
    result = result * 10 + pop;
  }
    
  return result;
    
}

reverse(1200);