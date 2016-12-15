
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('activities').insert({id: 1, todo: 'fertilize', sectionId: 1}),
        knex('activities').insert({id: 2, todo: 'mow', sectionId: 1}),
        knex('activities').insert({id: 3, todo: 'weed', sectionId: 1}),
        knex('activities').insert({id: 4, todo: 'plant', sectionId: 2}),
      ]);
    });
};
