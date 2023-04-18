const task = require("../models/taskmodel.js");

const editTask = async (id, data) => {
  try {
    // Actualiza la tarea usando los valores en el objeto 'data'
    const updatedTask = await task.update(data, {
      where: {
        id: id,
      },
    });

    // Comprueba si se actualizó una tarea y devuelve un mensaje de éxito
    if (updatedTask[0] === 1) {
         // Se espera que 'updatedTask' sea una matriz con un elemento que indica
         // el número de filas actualizadas
      return { message: `Task with ID ${id} was successfully updated` };
    } else {
      return { message: `Could not update the task with the ID ${id}` };
    }
  } catch (err) {
  // Devuelve un error HTTP 404 con el mensaje de error si ocurre un error
    res.status(404).send(err.message);
  }
};

module.exports = { editTask };
