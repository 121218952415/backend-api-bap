
const {createtask } = require("../middleware/middlewarecreatenote")
const Router = require("express");
const router = Router();

// Este es un endpoint POST que maneja las
// solicitudes de creación de nuevas tareas 
router.post("/", async (req, res) => {
  
  // Obtenemos la información de 
  //la nota desde el cuerpo de la solicitud
  const data = req.body;
  try {
   // Enviamos la información a la función "createtarea" para
   // que la agregue a la base de datos
    const newtask = await createtask(data);
    // Enviamos la respuesta al cliente con el código de estado
    //201 que indica éxito en la creación y la nueva tarea  creada
    res.status(201).json(newtask);
  } catch (err) {
    // Si ocurre algún error, enviamos una respuesta con el
    // código de estado 404 y un mensaje de error
    res.status(404).send(err.message);
  }
});

module.exports = router;
