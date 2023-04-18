const Router = require("express");
const CreateNote = require("./createtask");
const idtask = require("./byidtask");
const getdata = require("./getdata")
const router = Router();

router.use("/createtasks", CreateNote); // ruta de creado de notas
router.use("/task", idtask); // buscamos tarea por id
router.use("/gettask",getdata)
module.exports = router;
