function mockPromiseFunction(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(param)
    }, 0)
  })
}

mockPromiseFunction('hi').then((result) => {
  console.log('result', result)
})

console.log('me first')