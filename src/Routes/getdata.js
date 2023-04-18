const Router = require("express");
const { allInfo } = require("../Controllers/gettask");
const router = Router();

router.get("/",allInfo)
router.get("/filters" )





module.exports = router;