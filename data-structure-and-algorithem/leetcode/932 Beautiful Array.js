function beautifulArray(n) {
  function build(n) {
    if (n === 1) return [ 1 ];
        
    const odd = build(Math.floor(n/2)+n%2);
    const even = build(Math.floor(n/2));
        
    return [ ...odd.map(makeOdd), ...even.map(makeEven) ];
  }
    
  return build(n);
}

function makeOdd(n) {
  return n*2-1;
}

function makeEven(n) {
  return n*2;
}

beautifulArray(5);