const Router = require("express");
const { allInfo } = require("../Controllers/gettask");
const router = Router();

router.get("/",allInfo)





module.exports = router;