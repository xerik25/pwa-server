const express = require('express')
const routes = require('./routes/index')
const initSockets = require('./sockets/index')

// init Express, Websockets and Router
const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const router = express.Router()
const port = process.env.PORT || 3000
server.listen(port)

app.use('/', router)
app.use(express.static('app/dist'))
app.use('/api', routes)

io.on('connection', socket => {
  initSockets(socket)
})

// catch 404
app.use((req, res) => {
  // TODO: Setup logging instead of console.log
  console.log(`Error 404 on ${req.url}.`)
  res.status(404).send({ status: 404, error: 'Not found' })
})

// catch errors
app.use((err, req, res) => {
  const status = err.status || 500
  // TODO: Setup logging instead of console.log
  console.log(`Error ${status} (${err.message}) on ${req.method} ${req.url} with payload ${req.body}.`)
  res.status(status).send({ status, error: 'Server error' })
})

module.exports = server
