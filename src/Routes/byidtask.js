const Router = require("express");
const { bytaskid } = require("../Controllers/taskid");

const router = Router();
// Definición de ruta para obtener una tarea por su ID
router.get("/:id", bytaskid); // 

module.exports = router;
