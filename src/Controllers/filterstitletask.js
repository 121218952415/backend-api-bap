const task = require("../models/taskmodel.js");

const filterTask = async (req, res) => {
  // extrae el valor del parámetro "titulo" de la consulta 
  //en la URL
  const { titulo } = req.query;

  try {
    // llama a la función asincrónica "findAll" en el modelo "task" para obtener todas las tareas en 
    // la base de datos
    const data = await task.findAll();
    // utiliza el método "filter" para crear un nuevo array que contiene sólo 
    //los elementos de "data" cuyo título coincide con el valor de "titulo"
    const filter = data.filter((tl) => tl.titulo === titulo);
    // si el array "filter" está vacío, significa que no se encontró ninguna
    // tarea con el título buscado
    if (filter.length === 0) {
      res.status(404).send("title not fount");
    } else {
      res.send(filter);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports={filterTask};
