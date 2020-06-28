function job(sec) {
  return new Promise((resolve, reject) => {
    console.log('start sec: ' + sec)
    setTimeout(() => {
      console.log('finish sec: ' + sec)
      resolve(sec)
    }, sec * 1000)
  })
}

async function doJobs() {
  const result1 = job(2)
  const result2 = job(3)

  const final = await result1 + await result2

  console.info('result >>>', final)

}

doJobs()
