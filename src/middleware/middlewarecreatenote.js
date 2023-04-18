const { createnewtask  } = require("../Controllers/createnote");

//  Creamos un middleware para manejo de errores 
const createtask  = async (data) => {
  try {
    // pasamos la info y esperamos respuesta 
    const createtask  = await createnewtask(data);
    return createtask ;
  } catch (err) {
    res.status(404).send(err.message);
  }
};
module.exports = { createtask  };
