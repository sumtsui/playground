// let i = 0
// const arr = []
// while (i < 30) {
//   arr.push(Math.floor(Math.random() * 1000))
//   i++
// }

// console.info('arr >>>', arr)

const arr = [ 457,
  587,
  163,
  789,
  24,
  449,
  78,
  800,
  334,
  816,
  315,
  171,
  506,
  323,
  477,
  929,
  192,
  619,
  253,
  384,
  226,
  258,
  468,
  172,
  198,
  887,
  128,
  684,
  688,
  587 ]

let min = arr[0]
let max = arr[0]

let count = 0

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     count++
//     // console.info(arr[i] + 'vs' + arr[j])
//     // console.info('max >>>', max)
//     if (arr[j] > max) {
//       max = arr[j]
//     }

//     if (arr[j] < min) {
//       min = arr[j]
//     }
//   }
// }

for (let i = 1; i < arr.length; i++) {
  count++
  // console.info(arr[i] + 'vs' + arr[j])
  // console.info('max >>>', max)
  if (arr[ i ] > max) {
    max = arr[ i ]
  }
}

for (let i = 1; i < arr.length; i++) {
  if (arr[ i ] < min) {
    min = arr[ i ]
  }
}
console.info('min >>>', min)
console.info('max >>>', max)
console.info('count >>>', count)