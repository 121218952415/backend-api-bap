const task = require("../models/taskmodel.js");

// Función para crear una nueva tarea
const createnewtask = async (data) => {
  try {
    // Busca si ya existe una tarea  con el mismo título
    let existingNote = await task.findAll({ where: { titulo: data.titulo } });

    // Verifica si el título está vacío
    if (data.titulo.length === 0) {
      return "title empty";
    }
    // Verifica si la descripción está vacía
    else if (data.description.length === 0) {
      return "add description ";
    }
    // Verifica si ya existe una nota con el mismo título
    else if (existingNote.length > 0) {
      return "task already exists ";
    }
    // Si no hay errores, crea una nueva nota
    else {
      const newtask = await task.create(data);
      return newtask;
    }
  } catch (err) {
    // Si ocurre un error, envía un mensaje de error
    res.status(404).send(err.message);
  }
};

module.exports = { createnewtask };
