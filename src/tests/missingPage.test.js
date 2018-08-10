const supertest = require('supertest')

const app = require('../server')

describe('GET /api/error', function () {
  after(function (done) {
    app.close()
    done()
  })

  it('respond with json containing an array of 6 users', done => {
    supertest(app)
      .get('/api/invalidEndpoint')
      .expect(404)
      .end(done)
  })
})
