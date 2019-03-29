exports.seed = function(knex, Promise) {
  return knex("contexts").insert([
    {
      id: 1,
      project_id: 1,
      action_id: 1,
      location: "at home"
    },
    {
      id: 2,
      project_id: 1,
      action_id: 1,
      location: "at office"
    },
    {
      id: 3,
      project_id: 1,
      action_id: 1,
      location: "at park"
    }
  ]);
};
