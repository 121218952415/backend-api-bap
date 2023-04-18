const Task = require("../models/taskmodel");

// Definición de función asincrónica para obtener todas las tareas
const allInfo = async (req, res) => {
    try {
      // Buscar todas las tareas en la base de datos
      const allData = await Task.findAll()
  
      // Si se encontraron tareas, enviar una respuesta con el estado HTTP 200 y las tareas en formato JSON
      res.status(200).json(allData);
    } catch (err) {
      // Si hubo un error al buscar las tareas, enviar una respuesta con el estado HTTP 404 y el mensaje de error.
      res.status(404).send(err.message);
    }
  };
  
  // Exportar la función allInfo para poder utilizarla en otros archivos
  module.exports = { allInfo };