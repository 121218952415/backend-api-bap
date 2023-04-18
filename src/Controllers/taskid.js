const task = require("../models/taskmodel");

// Definición de función asincrónica para obtener una tarea por su ID
const bytaskid = async (req, res) => {
  // Obtener el ID de la tarea a través de los parámetros de ruta.
  const { id } = req.params;

  try {
    // Buscar la tarea por su ID en la base de datos.
    const foundTask = await task.findByPk(id);

    // Si se encontró la tarea, enviar una respuesta con el estado HTTP 200 y la tarea en formato JSON.
    res.status(200).json(foundTask);
  } catch (err) {
    // Si hubo un error al buscar la tarea, enviar una respuesta con el estado HTTP 404 y el mensaje de error.
    res.status(404).send(err.message);
  }
};

module.exports = { bytaskid };
