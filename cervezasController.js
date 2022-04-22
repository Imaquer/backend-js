const Cerveza = require('./cervezasModel')

const cervezasController = {}

cervezasController.list = (req, res) => {
  Cerveza.find((err, cervezas) => {
    if (err) {
      return res.status(500).json({
        message: 'Error obteniendo la cerveza',
      })
    }
    return res.json(cervezas)
  })
}

cervezasController.create = (req, res) =>
  res.send(
    `Creada cerveza ${req.body.nombre}. Características: ${req.body.descripción}`
  )

module.exports = cervezasController
