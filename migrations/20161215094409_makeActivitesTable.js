
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('activities', function (table) {
    table.increments();
    table.string('todo');
    table.datetime('completedAt');
    table.integer('sectionId');
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('activities') 
};

