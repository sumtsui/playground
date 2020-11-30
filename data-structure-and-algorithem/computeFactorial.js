let work
function computeFactorial(num) {
  if (num === 1) {
    // console.log('hitting the base case')
    work += ` ${num}`
    return 1
  } else {
    // console.log(`returning ${num} * computeFactorial(${num - 1})`)
    work += ` ${num * computeFactorial(num - 1)}`
    return num * computeFactorial(num - 1)
  }
}
computeFactorial(4)
console.log('result', work)

// function computeFactorial(num) { // 4
//   if (num === 1) {
//     // console.log('hitting the base case')
//     return 1
//   } else {
//     console.log(`returning ${num} * computeFactorial(${num - 1})`)
//     return num * computeFactorial(num - 1) // 4 * 3 * 2 * 1
//     ~~~~~~~
//   }
// }

// function computeFactorial(num) { // 3
//   if (num === 1) {
//     // console.log('hitting the base case')
//     return 1
//   } else {
//     console.log(`returning ${num} * computeFactorial(${num - 1})`)
//     return num * computeFactorial(num - 1) // 3 * 2 * 1
//   }
// }

// function computeFactorial(num) { // 2
//   if (num === 1) {
//     // console.log('hitting the base case')
//     return 1
//   } else {
//     console.log(`returning ${num} * computeFactorial(${num - 1})`)
//     return num * computeFactorial(num - 1) // 2 * 1
//   }
// }

// function computeFactorial(num) { // 1
//   if (num === 1) {
//     // console.log('hitting the base case')
//     return 1
//   } else {
//     console.log(`returning ${num} * computeFactorial(${num - 1})`)
//     return num * computeFactorial(num - 1)
//   }
// }