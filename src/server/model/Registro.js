const Sequelize = require("sequelize");
DB = require("../db/database");

const Registro = DB.define("registros", {
  nombre: {
    type: Sequelize.STRING,
  },
  telefono: {
    type: Sequelize.STRING,
  },
});

module.exports = Registro;
