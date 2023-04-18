const task = require("../models/taskmodel.js");

const filterTask = async (req, res) => {
  const { titulo } = req.query;
  console.log(titulo);

  try {
    const data = await task.findAll();
    const filter = data.filter((tl) => tl.titulo === titulo);
    if (filter.length === 0) {
      res.status(404).send("Título no encontrado");
    } else {
      res.send(filter);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports={filterTask};
