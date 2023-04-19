const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET_KEY, AUTH_EXPIRES, ROUNDS } = process.env;

const createUser = async (data) => {
  try {
    // Hash de la contraseña del usuario
    const password = bcrypt.hashSync(data.password, parseInt(ROUNDS));

    // Buscar si el usuario ya existe en la base de datos
    const userExists = await User.findOne({ where: { email: data.email } });

    if (userExists) {
      // Si el usuario ya existe, se retorna una respuesta de error
      return { error: "User already exists" };
    } else {
      // Si el usuario no existe, se crea en la base de datos
      const createUser = await User.create({ ...data, password });

      // Generar un token JWT después de crear el usuario
      const token = jwt.sign(
        { id: createUser.id },
        SECRET_KEY,
        { expiresIn: AUTH_EXPIRES }
      );

      // Retornar el usuario y el token
      return { user: createUser, token };
    }
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

// Middleware para verificar el token JWT
const verifyToken = (req, res, next) => {
  try {
    // Obtener el token de la cabecera Authorization
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      // Si no hay token, se retorna una respuesta de error
      return res.status(401).json({ error: "No token provided" });
    }

    // Verificar el token y decodificar el payload
    const decoded = jwt.verify(token, SECRET_KEY);

    // Agregar el id del usuario decodificado a la petición
    req.userId = decoded.id;

    // Llamar al siguiente middleware
    next();
  } catch (error) {
    // Si hay algún error, se retorna una respuesta de error
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = { createUser, verifyToken };
