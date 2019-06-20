const db = require('../data/dbConfig.js');
const server = require('../api/server.js');
const supertest = require('supertest');
const { getAll, insert, remove  } = require('./zipzorpModel.js');

describe('zipzorp model', () => {
      beforeEach(async () => {
            await db('zipzorps').truncate();
      });

      it('should set environment to testing', () => {
            expect(process.env.DB_ENV).toBe('testing');
      });

      describe('insert()', () => {
            it('should insert zipzorp to zipzorps database', async () => {
                  await insert({zipzorp: 'atcher bomm'})

                  const zipzorps = await db('zipzorps');
                  expect(zipzorps).toHaveLength(1)
            })
            it('should insert provided zipzorp', async () => {
                  let zipzorp = {zipzorp: 'gamgigdet'};
                  let inserted = await insert(zipzorp);
                  expect(inserted.zipzorp).toBe(zipzorp.zipzorp)
            })
            it('should return 201 after zipzorp is created', async () => {
                  let zipzorp = {zipzorp: 'rikkit'};
                  let inserted = await insert(zipzorp);
                  expect(inserted.zipzorp).toBe('rikkit')
                  expect(inserted.status).toBe(201)
            })
      })

      describe('remove()', () => {
            it('should remove zipzorp from zipzorps database', async () => {
                  await remove({zipzorp: 'flim flam'})

                  const zipzorps = await db('zipzorps');
                  expect(zipzorps).toHaveLength(0)
            })
            it('should return 204 after zipzorp is deleted', () => {

            })
      })
})