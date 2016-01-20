
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments();
    table.string('author');
    table.text('body');
    table.timestamp('time');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
