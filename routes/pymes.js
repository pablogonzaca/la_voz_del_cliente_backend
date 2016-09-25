var express = require('express');
var router = express.Router();
var pyme = require('../ORM/pyme');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res) {
    pyme.create(req.body).then(
        function(pyme) {
          res.send(pyme);
        },
        function(error) {
            if(error.errors[0].type === "unique violation")
                res.send("El pyme ya existe");
        }
    )
});

module.exports = router;
