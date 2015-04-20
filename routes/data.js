var express = require('express');
var router = express.Router();

var Temperature = require('../models/temperature');
var Motion = require('../models/motion');

/* GET users listing. */
router.get('/temperature/:cookie', function(req, res, next) {
  var date = Date.now();
  date.setDate(date.getDate()-1);
  Temperature.find({'cookie': req.params.cookie, 'date': {$gte: date}})
    .sort({'date': -1})
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
  var date = Date.now();
  date.setDate(date.getDate()-1);
  Motion.find({'cookie': req.params.cookie, 'date': {$gte: date}})
    .sort({'date': -1})
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

module.exports = router;
