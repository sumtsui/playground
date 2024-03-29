const Koa = require('koa')
const app = new Koa()

function delay (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function responseTime (ctx, next) {
  console.log('Started tracking response time')
  const started = Date.now()
  await next()
  // once all middleware below completes, this continues
  const ellapsed = (Date.now() - started) + 'ms'
  console.log('Response time is:', ellapsed)
  ctx.set('X-ResponseTime', ellapsed)
}

app.use(responseTime)
app.use(async (ctx, next) => {
  ctx.status = 200
  console.log('Setting status')
  await next()
})
app.use(async (ctx) => {
  await delay(1000)
  console.log('Setting body')
  ctx.body = 'Hello from Koa'
})

app.listen(3002, () => console.log('Koa app listening on 3002'))