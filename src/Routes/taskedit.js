const Router = require("express");
const {editTask} = require("../Controllers/edittask")
const router = Router();

router.put("/:id", async (req,res)=>{
  const data = req.body;
  const{ id }= req.params;

    try{
const Taskedit =  await editTask(id,data)
   res.status(200).send(Taskedit);
    }catch(err){
        console.log(err)
 res.status(404).send(err.message);
    }
});





module.exports = router;