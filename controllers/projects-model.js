const db = require("../config/knexConfig.js");

module.exports = {
  getProjects,
  getProject,
  addProject
};

function getProjects() {
  return db("projects");
}

function getProject(id) {
  return db("projects")
    .where({ id })
    .first();
}

function addProject(project) {
  return db("projects").insert(project);
}
