// DEPENDENCIAS
const express = require('express')
const cervezasRouter = require('./cervezasRouter.js')
const Cerveza = require('./cervezasModel')
const app = express()
const path = require('path')
require('./db')
const staticRoute = path.join(__dirname, 'public')
const bodyParser = require('body-parser')

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  const now = new Date().toString()
  console.log(`${now} ${req.method} ${req.url}`)
  next()
})

app.use('/static', express.static(staticRoute))

app.use('/api/cervezas', cervezasRouter)

//  RUTAS Y ENRUTADORES

app.get('/', function (req, res) {
  res.send('Hola Pepe!')
})

app.get('/bancos', function (req, res) {
  res.send('Aquí deberían aparecer los bancos')
})

const port = 3000
if (!module.parent) {
  app.listen(port, () => console.log(`API escuchando en el puerto ${port}`))
}

// exportamos la app para hacer tests
module.exports = app
