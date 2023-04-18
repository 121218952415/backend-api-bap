const Router = require("express");
const CreateNote = require("./createnote");
// const taskid= require("./taskid")
const router = Router();

router.use("/createtasks", CreateNote); // ruta de creado de notas
// router.use("/task/:taskId",taskid)
module.exports = router;
