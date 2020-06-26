const knex = require("../database");
const { create } = require("./UserController");

module.exports = {
  async index(req, res) {
    const { user_id, page = 1 } = req.query;

    const query = knex("projects")
      .limit(5)
      .offset((page - 1) * 5); //pagination

    const countObj = knex("projects").count();

    if (user_id) {
      query
        .where("user_id", user_id)
        .join("users", "users.id", "=", "projects.user_id")
        .select("projects.*", "users.username")
        .where("users.deleted_at", null);

      countObj.where({ user_id });
    }

    const [count] = await countObj;
    console.log(count);

    res.header("x-total-count", count["count(*)"]);

    const results = await query;
    return res.json(results);
  },

  async create(req, res, next) {
    try {
      const { title, user_id } = req.body;
      const result = await knex("projects").insert({
        title,
        user_id,
      });

      return res.send({ id: result[0], title, user_id });
    } catch (error) {
      next(error);
    }
  },
};
