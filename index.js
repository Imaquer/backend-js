const express = require('express')
const cervezasRouter = require('./cervezasRouter.js')
const app = express()
const path = require('path')
const staticRoute = path.join(__dirname, 'public')

app.use((req, res, next) => {
  const now = new Date().toString()
  console.log(`${now} ${req.method} ${req.url}`)
  next()
})

app.use('/static', express.static(staticRoute))

app.use('/cervezas', cervezasRouter)

app.get('/', function (req, res) {
  res.send('Hola Pepe!')
})

app.get('/bancos', function (req, res) {
  res.send('Aquí deberían aparecer los bancos')
})

app.listen(3000)
