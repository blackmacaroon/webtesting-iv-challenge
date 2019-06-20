
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zipzorps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('zipzorps').insert([
        {zipzorp: 'flim-flam'},
        {zipzorp: 'tilly wagus'},
        {zipzorp: 'shribberty'},
        {zipzorp: 'buskinee raggle'},
        {zipzorp: 'samskol'}
      ]);
    });
};
