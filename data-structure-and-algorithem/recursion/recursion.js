/* eslint-disable no-unused-vars */
// let tracker = 0
// const callMe = (arg) => {
//   tracker++
//   if (tracker === 3) {
//     return arg
//   } else {
//     return callMe('anytime')
//   }
// }

// console.info('callMe', callMe())

const loopNTimes = (n) => {
  console.info('n ===', n)
  if (n <= 1) {
    return 'complete!'
  } else {
    return loopNTimes(n-1)
  }
}

function reverse(string) {
  // Base case
  if (string.length < 2) return string;
  // Recursive case
  return reverse(string.slice(1, string.length)) + string[ 0 ];
}

// console.log(reverse('string'))
// console.log(loopNTimes(100))

/*
Tips:
1. I am trying to reverse a string. A problem one step simpler would be to reverse a string that is one letter shorter.
2. I will assume, and believe with every fiber of my being, that my function
can correctly reverse a string that is one letter shorter than the one I am
currently trying to reverse.
3. I ask myself: Since I know and believe that my function can correctly reverse a string that is one letter shorter than the one I am currently trying to reverse, how can I reverse the whole string? Well, I can take all of the characters except the first one, reverse those (which I know and believe that my function can do), and then tack the first character on to the end!
*/


/*
Practices:
1. Go through an array and print out all of the elements
2. Determine whether or not a string is a palindrome
3. Calculate a raised to the power of b
4. Extra credit: Try implementing the map function (the one that transforms arrays) without using loops
*/


// 1. Go through an array and print out all of the elements
// one step simpler: print one less element
// ok I believe
// ok I am thinking
// const arr = [ 1, 5, 6, 11 ]

function printElements(n) {
  // base case
  if (n < 1) {
    console.log(arr[ 0 ])
  }

  // recursive case
  else {
    console.log(arr[ n ])
    printElements(n - 1)
  }
}

// printElements(arr.length - 1)

// 2. Determine whether or not a string is a palindrome
function palindromeWrap(str) {
  const strArr = str.split('')
  const finish = Math.floor(strArr.length / 2)
  let i = 0

  return function testPalindrome() {
    if (i === finish) {
      return true
    }

    if (strArr[i] === strArr[strArr.length - 1 - i]) {
      i++
      return testPalindrome()
    } else {
      return false
    }
  }
}

// const result = palindromeWrap('okcbninbcko')()

// 3. Calculate a raised to the power of b
const a = 8
function expo(b) {
  if (b === 1) {
    return a
  }

  return a * expo(--b)
}

// const result = expo(3)


// 4. Extra credit: Try implementing the map function (the one that transforms arrays) without using loops
function mapArrayWrap(arr, cb) {
  const result = []
  let i = 0

  return function mapArray() {
    if (i === arr.length) return result
    
    result.push(cb(arr[i++]))

    return mapArray()
  }
}

function add10(item) {
  return item + 10
}

function addKey(item) {
  return { value: item }
}

const result = mapArrayWrap([ 1, 2, 3, 4 ], addKey)()

console.info('result', result)