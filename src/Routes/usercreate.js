const Router = require("express");
const {createUser} = require("../Controllers/createuser");
const router = Router();

router.post("/", async (req, res) => {
  const data = req.body;
  
  try {
    const userdata = await createUser(data);
    res.status(201).json(userdata);
  } catch (err) {
    console.log(err)
    res.status(404).send(err.message);
  }
});

module.exports = router;
