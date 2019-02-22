
exports.up = function(knex, Promise) {
  return knex.schema.createTable("Bosses", table => {
		table.increments("boss_id")
    table.string("boss_name").notNullable()
    table.integer("location_id")
	})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("Bosses")
};
