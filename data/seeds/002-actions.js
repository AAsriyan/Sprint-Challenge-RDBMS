exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    {
      id: 1,
      description: "website action desc",
      notes: "website action notes",
      completed: false,
      project_id: 1
    },
    {
      id: 2,
      description: "money action desc",
      notes: "money action notes",
      completed: false,
      project_id: 2
    },
    {
      id: 3,
      description: "profit action desc",
      notes: "profit action notes",
      completed: false,
      project_id: 3
    }
  ]);
};
