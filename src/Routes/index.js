const Router = require("express");
const CreateNote = require("./createtask");
const idtask = require("./idtask");
const router = Router();

router.use("/createtasks", CreateNote); // ruta de creado de notas
router.use("/task", idtask); // buscamos tarea por id
module.exports = router;
