const Note = require("../models/notemodel")


const getIdTask = async (req,res) => {
    const {id} = req.params;
    try {
        const foundTask = await Note.findByPk(id)
        res.status(200).json(foundTask)
    } catch (err) {
        // Retorna una Promise rechazada con el mensaje de error.
        res.status(404).send(err.message);
    }
};
module.exports = {getIdTask};