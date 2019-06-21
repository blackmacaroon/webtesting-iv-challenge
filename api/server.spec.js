const server = require('./server.js');
const supertest = require('supertest');

describe('server', () => {
      describe('GET/ sanity check', () => {
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

      describe('GET/ZIPZORPS', () => {
            it('should render list with res 200 OK', () => {
                  return supertest(server)
                  .get('/zipzorps')
                  .expect(200)
            })
            it('should render list in json format', () => {
                  return supertest(server)
                  .get('/zipzorps')
                  .expect('Content-Type', /json/i);
            })
      })

      describe('POST/ZIPZORPS', () => {
            it('should respond with 201 when new zipzorp is created', async () => {
                  const zipzorp = { zipzorp: 'qop'}
                  const res = await supertest(server)
                        .post('/zipzorps')
                        .send(zipzorp)
                        .expect(201)
            })
      })
})