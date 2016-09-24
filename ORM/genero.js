var sequelize = require('database');


var User = sequelize.define('genero', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true;
  },

  Nombre: {
    type: Sequelize.STRING
  },

}, {
  freezeTableName: true // Model tableName will be the same as the model name
});