exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      id: 1,
      name: "make website",
      description: "make website description",
      completed: false
    },
    {
      id: 2,
      name: "make money",
      description: "make money description",
      completed: false
    },
    {
      id: 3,
      name: "profit",
      description: "make profit description",
      completed: false
    }
  ]);
};
