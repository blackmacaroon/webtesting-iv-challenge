const server = require('./server.js');
const supertest = require('supertest');

describe('server sanity check', () => {
      describe('GET/', () => {
            it('should respond with 200 OK', () => {
                  return supertest(server)
                  .get('/')
                  .expect(200)
            })
            it('should respond with content-type = json', () => {
                  return supertest(server)
                  .get('/')
                  .expect('Content-Type', /json/i);
            })
            it('should respond with a message: cutesy movie quote', async () => {
                  await supertest(server)
                        .get('/')
                        .then(res => {
                              expect(res.body).toEqual({ message: 'look what you did, you little jerk.' })
                        })
            })


      })
})