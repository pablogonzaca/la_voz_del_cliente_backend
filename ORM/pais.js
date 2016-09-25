var sequelize = require('./database');
var Sequelize = require("sequelize");


var Pais = sequelize.define('pais',
  {
    Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },

    Nombre: {
      type: Sequelize.STRING
    },

    Iso: {
      type: Sequelize.STRING
    },

    Iso3: {
      type: Sequelize.STRING
    },

    CodigoNumerico: {
      type: Sequelize.INTEGER,
    },

    CodigoTelefono: {
      type: Sequelize.INTEGER,
    }
  },
  {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false
  }
);

module.exports = Pais;