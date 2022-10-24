// https://medium.com/netscape/mastering-koa-middleware-f0af6d327a69
const Koa = require('koa')
const app = new Koa()
// Middleware 1
app.use(async (ctx, next) => {
  ctx.status = 200
  console.log('Setting status')
  // Call the next middleware, wait for it to complete
  next()
  console.log('back')
})
// Middleware 2
app.use(async (ctx) => {
  console.log('Setting body')
  ctx.body = 'Hello from Koa'
})
app.listen(3002, () => console.log('Koa app listening on 3002'))