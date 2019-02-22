
exports.up = function(knex, Promise) {
  return knex.schema.createTable("Resistances", table => {
    table.integer("boss_id")
    table.integer("damage_id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("Resistances")
};
