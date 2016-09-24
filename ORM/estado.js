var sequelize = require('database');


var User = sequelize.define('pais', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true;
  },

  Nombre: {
    type: Sequelize.STRING
  },

  PaisID: {
    type: Sequelize.INTEGER,
    references: {
      model: pais,
      key: 'Id'
    }
  }

}, {
  freezeTableName: true // Model tableName will be the same as the model name
});