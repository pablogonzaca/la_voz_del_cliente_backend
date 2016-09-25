var Sequelize = require("sequelize");
var sequelize = require('./database');


var User = sequelize.define('tiporedsocial', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },

  Nombre: {
    type: Sequelize.STRING
  },

}, {
  freezeTableName: true // Model tableName will be the same as the model name
});