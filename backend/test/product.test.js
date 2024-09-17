let db = require('../app/config/db.config.js');

let server = require('../server.js');

let request = require('supertest');
let assert = require('assert');


describe('Product API', () => {
  before(async () => {
    await db.sequelize.sync({ force: false });
  });

  describe('/GET products', () => {
    it('it should GET all the products', (done) => {
      request(server)
        .get('/api/products')
        .end((err, res) => {
          if (err) return done(err);
          assert.strictEqual(res.statusCode, 200);
          assert(Array.isArray(res.body), 'Response body should be an array');
          done();
        });
    });
  });

  describe('/GET product', () => {
    it('it should GET product by id', (done) => {
      request(server)
        .get('/api/product/1')
        .end((err, res) => {
          if (err) return done(err);
          assert.strictEqual(res.statusCode, 200);
          assert.strictEqual(typeof res.body, 'object');
          assert.strictEqual(res.body.hasOwnProperty('name'), true);
          assert.strictEqual(res.body.hasOwnProperty('description'), true);
          assert.strictEqual(res.body.hasOwnProperty('cost'), true);
          assert.strictEqual(res.body.hasOwnProperty('imageUrl'), true);
          assert.strictEqual(res.body.hasOwnProperty('typeId'), true);
          assert.strictEqual(res.body.hasOwnProperty('typeName'), true);
          done();
        });
    });
  });

  describe('/GET products', () => {
    it('it should GET all the products with done typeId', (done) => {
      request(server)
        .get('/api/products/typeId/1')
        .end((err, res) => {
          if (err) return done(err);
          assert.strictEqual(res.statusCode, 200);
          assert(Array.isArray(res.body), 'Response body should be an array');
          done();
        });
    });
  });

});