/**
 * time complexity:
 * merge: O(n)
 * sort: O(log n)
 * combined: O(n log n)
 * 
 * space complexity: 
 * O(n)
 */

function mergeSort(arr) {
  
  function sort(subarr) {
    // console.log(subarr);
    if (subarr.length <= 1) return subarr;

    const left = sort(subarr.slice(0, Math.floor(subarr.length / 2)));
    const right = sort(subarr.slice(Math.floor(subarr.length / 2)));

    const merged = merge(left, right);

    console.log(left, right, merged);

    return merged;
  }

  return sort(arr);
}

function merge(left, right) {
  // [1,2]
  // [3,4]
  let i=0, j=0;
  const result = [];
  while (i < left.length || j < right.length) {
    if (i === left.length) {
      result.push(...right.slice(j));  
      break;
    }
    if (j === right.length) {
      result.push(...left.slice(i));  
      break;
    }
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result;
}

const array = [ 100, 61, 90, 2,3,1,5,16,4,7,8,0,11 ];

// const result = merge([ 1,3,6 ], [ 2,4 ]);
// console.log('result', result);

console.log(mergeSort(array));