
exports.up = function(knex, Promise) {
  return knex.schema.createTable("DamageTypes", table => {
    table.increments("damage_id")
    table.string("damage_name").notNullable()
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("DamageTypes") 
};
