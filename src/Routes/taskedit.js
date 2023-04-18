const Router = require("express");
const { editTask } = require("../Controllers/edittask");
const router = Router();

// Este controlador maneja una solicitud PUT
//en una ruta específica (:id)
router.put("/:id", async (req, res) => {
  const data = req.body; // Extrae los datos del cuerpo de la solicitud
  const { id } = req.params; // Extrae el ID del parámetro de ruta

  try {
    //Utiliza la función editTask para enviar po middleware a
    //  base de datos
    const Taskedit = await editTask(id, data);
    // Envía la respuesta como una respuesta HTTP con un código de estado
    //200 si se pudo actualizar la tarea correctamente
    res.status(200).send(Taskedit);
  } catch (err) {
    // Si se produce algún error, se captura con un bloque try-catch
    //y se envía como una respuesta HTTP con un código de estado 404
    res.status(404).send(err.message);
  }
});

module.exports = router;
