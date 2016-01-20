
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function(table){
    table.increments();
    table.integer('post_id');
    table.string('commenter');
    table.text('body');
    table.timestamp('time')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
