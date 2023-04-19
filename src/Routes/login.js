const Router = require("express");
const { verifysingnin } = require("../Controllers/singnin");
const { verifyToken } = require("../Controllers/createuser");
const router = Router();


router.post("/",verifyToken, async (req, res) => {
    const data = req.body;
    
    try {
      const uiniciasesion  = await verifysingnin(data);
      res.status(201).json(uiniciasesion);
    } catch (err) {
      console.log(err)
      res.status(404).send(err.message);
    }
  });





module.exports = router;