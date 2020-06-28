const http = require('http')

function doOnIncoming(incomingData, functionToSetOutGoingData) {
  functionToSetOutGoingData.end('Welcome!')
}

function doOnError(infoOnError) {
  console.error(infoOnError)
}

const server = http.createServer()

server.listen(3000)

server.on('request', doOnIncoming)
server.on('clientError', doOnError)