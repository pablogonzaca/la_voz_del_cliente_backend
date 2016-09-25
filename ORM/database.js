var Sequelize = require("sequelize");

var sequelize = new Sequelize('programathon2016', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});

module.exports = sequelize;
