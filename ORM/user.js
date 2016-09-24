var sequelize = require('database');


var User = sequelize.define('usuario', {
  Usuario: {
    type: Sequelize.STRING
    // field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },

  NombreCompleto: {
    type: Sequelize.STRING
  },

  Clave: {
    type: Sequelize.STRING
  },

  EmailContacto: {
    type: Sequelize.STRING
  },

  ID: {
    type: Sequelize.INTEGER,
    primaryKey: true
  }

}, {
  freezeTableName: true // Model tableName will be the same as the model name
});