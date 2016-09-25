var express = require('express');
var router = express.Router();
var estado = require('../ORM/estado');
var pais = require('../ORM/pais');

/* GET users listing. */
router.get('/:pais_id', function(req, res, next) {
    id_pais = req.params.pais_id;
    console.log(id_pais);
    estado.findAll({
      where: {
        PaisId: id_pais
      }
    }).then(
        function(data) {
          res.send(data);
        },
        function(error) {
        }
    );

});

router.post('/', function (req, res) {

});

module.exports = router;
