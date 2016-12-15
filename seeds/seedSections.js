
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sections').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('sections').insert({id: 1, name: 'dell border', description: 'is a thing'}),
        knex('sections').insert({id: 2, name: 'amphitheatre', description: 'for the plays'}),
        knex('sections').insert({id: 3, name: 'dell bush path', description: 'where the fairies'})
      ]);
    });
};
