/* global describe it beforeEach */
const request = require('supertest')
const expect = require('chai').expect
const { ObjectID } = require('mongodb')

/* obtenemos nuestra api rest que vamos a testear */

const app = require('../index')

// reset models and schema from previous tests:
// see https://github.com/Automattic/mongoose/issues/1251

const mongoose = require('mongoose')
mongoose.models = {}
mongoose.modelSchemas = {}

const Cervezas = require('../cervezasModel')
const cervezas = require('../init-db/cervezas.json')

// añadimos _id para poder testear con _id el GET /api/cervezas/id o DELETE api/cervezas/id
cervezas.forEach((cerveza) => (cerveza._id = new ObjectID()))

const idTest = new ObjectID()

const cerveza = {
  nombre: 'Cervezas de test',
  descripción: 'Descripción de la cerveza de test',
  graduación: '5º',
  envase: 'Botellín',
  precio: '2€',
}

beforeEach((done) => {
  Cervezas.deleteMany({})
    .then(() => {
      return Cervezas.insertMany(cervezas)
    })
    .then(() => done())
})

describe('Recurso cervezas', () => {
  describe('Obtener todas las cervezas', () => {
    it('Debería obtener todas', (done) => {
      request(app)
        .get('/api/cervezas')
        .expect(200)
        .expect((res) => {
          expect(res.body.length).to.be.equal(9)
        })
        .end(done)
    })
  })
})
