
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('sections', function (table) {
    table.increments();
    table.string('name');
    table.string('description');
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sections') 
};

