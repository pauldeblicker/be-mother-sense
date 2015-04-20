var express = require('express');
var router = express.Router();

var Temperature = require('./models/temperature');
var Motion = require('./models/motion');

/* GET users listing. */
router.get('/temperature/:cookie', function(req, res, next) {
  Temperature.find({'cookie': req.params.cookie})
    .sort({'date': -1})
    .limit(96)
    .exec(function(err, data) {
      if(err) {
        res.json(err);
      } else if(!data) {
        res.json({success: false});
      } else {
        res.json({success: true, data: data});
      }
    });
});

router.get('/motion/:cookie', function(req, res, next) {

});

module.exports = router;
