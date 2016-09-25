var Sequelize = require("sequelize");
var sequelize = require('./database');

var Genero = sequelize.define('genero', {
  Id: {
    type: Sequelize.CHAR,
    primaryKey: true,
  },

  Nombre: {
    type: Sequelize.STRING
  },

}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false
});

module.exports = Genero;