var sequelize = require('./database');
var Sequelize = require("sequelize");


var Estado = sequelize.define('estado', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },

  Nombre: {
    type: Sequelize.STRING
  },

  PaisID: {
    type: Sequelize.INTEGER,
    references: {
      model: "pais",
      key: 'Id'
    }
  }

}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false
});

module.exports = Estado;