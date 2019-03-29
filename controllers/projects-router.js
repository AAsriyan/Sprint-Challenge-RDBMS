const router = require("express").Router();
const Projects = require("./projects-model.js");
const Actions = require("./actions-model.js");

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Projects.getProject(id);
    const actions = await Actions.getActionsByProject(id);
    if (project) {
      res.status(200).json({ ...project, actions });
    } else {
      res.status(404).json({ message: "Project not found." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const { name, description, completed } = req.body;
  if (!name || !description || completed > 1) {
    return res.status(400).json({
      message:
        "Please provide a name, description, and completed value for this project."
    });
  }
  try {
    const [id] = await Projects.addProject(req.body);
    const project = await Projects.getProject(id);

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
