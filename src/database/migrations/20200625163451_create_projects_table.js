exports.up = (knex) => {
  return knex.schema.createTable("projects", function (table) {
    table.increments("id");
    table.text("title");

    //relationship
    table
      .integer("user_id")
      .references("users.id")
      .notNullable()
      .onDelete("CASCADE");

    table.timestamp(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("projects");
};
