
exports.up = function(knex, Promise) {
  return knex.schema.createTable("Weaknesses", table => {
    table.integer("boss_id")
    table.integer("damage_id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("Weaknesses")
};
