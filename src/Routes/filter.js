const Router = require("express");
const {filterTask}= require("../Controllers/filterstitletask")
const router = Router();

router.get("/",filterTask);

module.exports = router;
