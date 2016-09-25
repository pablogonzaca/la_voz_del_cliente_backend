var express = require('express');
var router = express.Router();
var genero = require('../ORM/genero');

/* GET users listing. */
router.get('/', function(req, res, next) {
    genero.findAll({attributes: ["Id", "Nombre"]}).then(
        function(data) {
          res.send(data);
        },
        function(error) {
        }
    );
});

module.exports = router;
