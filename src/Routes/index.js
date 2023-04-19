const Router = require("express");
const CreateNote = require("./createtask");
const idtask = require("./byidtask");
const getdata = require("./getdata");
const taskedit = require("./taskedit");
const deletetask = require("./deletetask");
const filter = require("./filter");
const login = require("./login");
const router = Router();
const usercreate = require("./usercreate");

router.use("/createtasks", CreateNote); // ruta de creado de task
router.use("/task", idtask); // buscamos tarea por id
router.use("/alltask", getdata); // Traer todas las notas de db
router.use("/taskedit", taskedit); //editamos una task ya existente
router.use("/deletetask", deletetask); // Borramos data de db
router.use("/filtrado", filter); //filtrado por titulo de la tarea
router.use("/singnin", login); // saber que cliente va iniciar sesión
router.use("/register", usercreate); //ruta para creacion de  usurio y jwt 
module.exports = router;
