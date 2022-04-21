const cervezasController = {}

cervezasController.list = (req, res) => res.send('Lista de cervezas')
cervezasController.create = (req, res) =>
  res.send(
    `Creada cerveza ${req.body.nombre}. Características: ${req.body.descripción}`
  )

module.exports = cervezasController
