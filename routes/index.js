var express = require('express');
var router = express.Router();

var Temperature = require('../models/temperature');
var Motion = require('../models/motion');

var cookies = {
    "sGB9ucRBWAa2fM3Uzy2c1G0pxNm44w0R" : "known cranberry",
    "MXQdQqH6hRUqoLRTwrBqRlluV9amWZVM" : "purple turon",
    "B7nc9cs7dmtMAW1mZQU2HKVP5aqqWyX7" : "double passion",
    "kzb1IB3G0eRr8lWZJPnwJl13AdjYdvxI" : "double anooshaboor"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("ok");
  res.sendStatus(200);
});

router.post('/mother/temperatures', function(req, res) {
  var newTemp = new Temperature();
  newTemp.cookie =   console.log(cookies[req.body.nodeUid]);
  newTemp.date = req.body.dateEvent;
  newTemp.value = req.body.data.centidegreeCelsius;
  newTemp.save(function(err) {
    if(err) {
      res.json({success: false});
    } else {
      res.json({success: true});
    }
  });
  res.sendStatus(200);
});

router.post('/mother/motions', function(req, res) {
  var newMotion = new Motion();
  newMotion.cookie = cookies[req.body.nodeUid];
  newMotion.date = req.body.dateEvent;
  newMotion.intensity = req.body.data.avgIntensity;
  newMotion.duration = req.body.data.durationSeconds;
  newMotion.value = req.body.data.numberMovements;
  newMotion.save(function(err) {
    if(err) {
      res.json({success: false});
    } else {
      res.json({success: true});
    }
  });
  res.sendStatus(200);
});

router.post('/mother/batteries', function(req, res) {
  console.log(cookies[req.body.nodeUid]);
  console.log(req.body.dateEvent);
  console.log(req.body.data.levelMillivolt);
  res.sendStatus(200);
})

module.exports = router;
