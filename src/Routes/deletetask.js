const Router = require("express");
const {taskDelete} = require("../Controllers/taskdelete")
const router = Router();

router.delete("/:id", async (req, res) => {
    // El ID de la tarea a eliminar
  const { id } = req.params;
  try {
    const deletetask = await taskDelete(id);
    res.status(201).json(deletetask);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
