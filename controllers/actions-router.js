const router = require("express").Router();
const Actions = require("./actions-model.js");

router.get("/", async (req, res) => {
  try {
    const [...actions] = await Actions.getActions();
    res.status(200).json({ actions: actions });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const action = await Actions.getAction(id);
    if (action) {
      res.status(200).json({ actions: action });
    } else {
      res.status(404).json({ message: "Action not found." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const { description, notes, completed, project_id } = req.body;
  if (!project_id) {
    return res.status(400).json({
      message: "Please provide a project id for this action."
    });
  }
  if (!description || !notes || completed > 1) {
    return res.status(400).json({
      message:
        "Please provide a description, notes, and completed value for this action."
    });
  }
  try {
    const [id] = await Actions.addAction(req.body);
    const action = await Actions.getAction(id);

    res.status(201).json(action);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
