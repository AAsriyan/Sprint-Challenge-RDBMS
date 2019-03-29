const db = require("../config/knexConfig.js");

module.exports = {
  getActions,
  getAction,
  getActionsByProject,
  addAction
};

function getActions() {
  return db("actions");
}

function getAction(id) {
  return db("actions")
    .where({ id })
    .first();
}

function getActionsByProject(id) {
  return db("actions").where({ project_id: id });
}

function addAction(action) {
  return db("actions").insert(action);
}
