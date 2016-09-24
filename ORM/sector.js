var sequelize = require('database');


var User = sequelize.define('sector', {

  Nombre: {
    type: Sequelize.CHAR
  },

  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  }

}, {
  freezeTableName: true // Model tableName will be the same as the model name
});