exports.up = (knex) => {
  return knex.schema.alterTable("users", function (table) {
    table.timestamp("deleted_at");
  });
};

exports.down = (knex) => {
  return knex.schema.alterTable("users", function (table) {
    table.dropColumn("deleted_at");
  });
};
