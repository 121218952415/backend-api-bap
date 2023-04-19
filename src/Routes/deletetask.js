const Router = require("express");
const {taskDelete} = require("../Controllers/taskdelete")
const router = Router();


// Middleware personalizado para validar el ID
const validateTaskId = (req, res, next) => {
  const { id } = req.params;
  if (!id ) {
    return res.status(400).send('The task ID is invalid');
  }
  next();
};

// Ruta DELETE con middleware
router.delete("/:id", validateTaskId, async (req, res) => {
  const { id } = req.params;
  try {
    const deletetask = await taskDelete(id);
    res.status(201).json(deletetask);
  } catch (err) {
    res.status(404).send(err.message);
  }
});


module.exports = router;
