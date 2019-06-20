const db = require('../data/dbConfig.js');

module.exports = {
      getAll,
      insert,
      remove
};

function getAll() {
      return db('zipzorps')
};

function insert(zipzorp) {
      return db('zipzorps')
            .insert(zipzorp, 'id')
            .then(ids => {
                  return db('zipzorps')
                        .where({ id: ids[0] })
                        .first();
            })
};

function remove(id) {
      return db('zipzorps')
      .where({ id })
      .del();
}