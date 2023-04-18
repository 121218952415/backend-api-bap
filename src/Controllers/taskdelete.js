const task = require("../models/taskmodel.js");

const taskDelete = async (id) => {
//Una promesa que devuelve un objeto con un mensaje 
// indicando si la tarea se eliminó con éxito o no
    try {
      const datadelete = await task.destroy({
        where: {
          id: id,
        },
      });
     return { message: `Task with ID ${id} was successfully deleted` };
    } catch (err) {
      throw new Error(`Could not delete the task with the ID ${id}`);
    }
  };

module.exports = { taskDelete };
