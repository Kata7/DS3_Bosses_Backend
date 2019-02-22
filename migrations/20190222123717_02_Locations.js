
exports.up = function(knex, Promise) {
  return knex.schema.createTable("Locations", table => {
    table.increments("location_id")
    table.string("location_name").notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("Locations")
};
