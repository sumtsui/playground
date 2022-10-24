const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = 400
    ctx.body = `Uh-oh: ${err.message}`
    console.log('Error handler:', err.message)
  }
})
app.use(async (ctx) => {
  if (ctx.query.greet !== 'world') {
    throw new Error('can only greet "world"')
  }
  
  console.log('Sending response')
  ctx.status = 200
  ctx.body = `Hello ${ctx.query.greet} from Koa`
})

app.listen(3002, () => console.log('Koa app listening on 3002'))