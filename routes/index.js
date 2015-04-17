var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("ok");
});

router.post('/mother/temperatures', function(req, res) {
  console.log(req);
  console.log(res);
});

router.post('/mother/motions', function(req, res) {
  console.log(req);
  console.log(res);
});

router.post('/mother/batteries', function(req, res) {
  console.log(req);
  console.log(res);
})

module.exports = router;
