const Router = require("express");
const CreateNote = require("./createtask");
const idtask = require("./byidtask");
const getdata = require("./getdata")
const taskedit = require("./taskedit")
const deletetask = require("./deletetask")
const filter = require("./filter")
const router = Router();

router.use("/createtasks", CreateNote); // ruta de creado de notas
router.use("/task", idtask); // buscamos tarea por id
router.use("/alltask",getdata)// Traer todas las notas de db 
router.use("/taskedit",taskedit)//editamos una nota ya existente 
router.use("/deletetask",deletetask) // Borramos data de db 
router.use("/filtrado",filter)//filtrado por titulo de la tarea 
module.exports = router;
