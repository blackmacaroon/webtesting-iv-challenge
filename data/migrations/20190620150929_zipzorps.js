
exports.up = function(knex, Promise) {
  return knex.schema.createTable('zipzorps', tbl => {
        tbl.increments();
        tbl.string('zipzorp', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('zipzorps');
};
