function factorial(num) {
  if (num === 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

function memoize(fn) {
  const cache = {}
  return (num) => {
    if (cache[num]) {
      console.info('fetching from cache', cache)
      return cache[num]
    } else {
      console.info('calculating', cache)
      const result = fn(num)
      cache[num] = result
      return result
    }
  }
}

const memoizeFactorial = memoize(factorial)

console.info('result', memoizeFactorial(8))
console.info('result', memoizeFactorial(8))
console.info('result', memoizeFactorial(9))
