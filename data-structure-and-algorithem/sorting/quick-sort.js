/**
 * time complexity:
 * 
 * space complexity: 
 */

function quickSort(array) {
  function divide(sub) {
    // console.log('sub', sub);
    if (sub.length <= 1) return sub;

    const start = 0;
    // const mid = Math.floor(sub.length / 2);
    // const end = sub.length - 1;
    // let pivot = Math.max(sub[start], sub[mid], sub[end]);
    let pivot = sub[start];
    
    const smaller = [];
    const larger = [];

    for (let n of sub) {
      if (n < pivot) smaller.push(n);
      else if (n > pivot) larger.push(n);
    }

    smaller.push(pivot);

    divide([ ...smaller, ...larger ]);

  }

  divide(array);
}

const arr = [ 3,1,2,4 ];
// [1,2,3]
// [4]
// [1],[2,3]
// [2],[3]


const sample = new Array(10).fill()
  .map(() => parseInt((Math.random() * 100).toFixed()));

quickSort(arr);