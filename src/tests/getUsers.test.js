const supertest = require('supertest')
const expect = require('chai').expect

const app = require('../server')

describe('GET /api/getUsers', function () {
  after(function (done) {
    app.close()
    done()
  })

  it('respond with json containing an empty array with 0 users', done => {
    supertest(app)
      .get('/api/getUsers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err
        expect(res.body).to.be.an('object')
        expect(res.body.users).to.be.an('array').that.is.empty // eslint-disable-line
        done()
      })
  })

  it('respond with json containing an array of 6 users', done => {
    const requestedUsers = 6
    supertest(app)
      .get(`/api/getUsers?requestedUsers=${requestedUsers}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err
        expect(res.body).to.be.an('object')
        expect(res.body.users).to.be.an('array')
        done()
      })
  })
})
