exports.up = function(knex, Promise) {
  return knex.schema.createTable("contexts", table => {
    table.increments();

    table
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("action_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("actions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.string("location", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("contexts");
};
