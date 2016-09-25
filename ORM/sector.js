var Sequelize = require("sequelize");
var sequelize = require('./database');


var Sector = sequelize.define('sector', {

  Nombre: {
    type: Sequelize.CHAR
  },

  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  }

}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false
});

module.exports = Sector;