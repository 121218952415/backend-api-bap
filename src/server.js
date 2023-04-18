// Importaciones de las dependencias
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes");
const sequelize = require("./db");

// Crear la aplicación de Express
const app = express();

// Configuración de middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(routes);

// Configuración y sincronización de la base de datos
async function connectDatabase() {
  try {
    sequelize.sync({ force: false, alter: true }).then(() => {
      console.log("Postgres sync has been established successfully.");
    });
  } catch (error) {
    console.error("Unable to sync to the database:", error);
  }
}
connectDatabase();

module.exports = app;
