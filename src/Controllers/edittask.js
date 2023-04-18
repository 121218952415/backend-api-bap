const task = require("../models/taskmodel.js");

const editTask = async (id, data) => {
  try {
    const updatedTask = await task.update(data, {
      where: {
        id: id,
      },
    });

    // Comprueba si se actualizó una tarea y devuelve un mensaje de éxito
    if (updatedTask[0] === 1) {
      return { message: `Task with ID ${id} was successfully updated` };
    } else {
      return { message: `Could not update the task with the ID ${id}` };
    }
  } catch (err) {
    console.log(err)
    res.status(404).send(err.message);
  }
};

module.exports = { editTask };
