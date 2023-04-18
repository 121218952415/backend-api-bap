const Router = require("express");
const { getIdTask } = require("../Controllers/taskid");

const router = Router();

router.get("/:id", getIdTask);

module.exports = router;
