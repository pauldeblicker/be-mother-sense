var express = require('express');
var router = express.Router();

var cookies = {
    "sGB9ucRBWAa2fM3Uzy2c1G0pxNm44w0R" : "known cranberry",
    "MXQdQqH6hRUqoLRTwrBqRlluV9amWZVM" : "purple turon",
    "B7nc9cs7dmtMAW1mZQU2HKVP5aqqWyX7" : "double passion",
    "kzb1IB3G0eRr8lWZJPnwJl13AdjYdvxI" : "double anooshaboor"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("ok");
});

router.post('/mother/temperatures', function(req, res) {
  console.log(cookies[req.body.nodeUid]);
  console.log(req.body.dateEvent);
  console.log(req.body.centidegreeCelsius);
  res.sendStatus(200);
});

router.post('/mother/motions', function(req, res) {
  console.log(cookies[req.body.nodeUid]);
  console.log(req.body.dateEvent);
  console.log(req.body.data.durationSeconds);
  console.log(req.body.data.numberMovements);
  console.log(req.body.data.avgIntensity);
  res.sendStatus(200);
});

router.post('/mother/batteries', function(req, res) {
  console.log(cookies[req.body.nodeUid]);
  console.log(req.body.dateEvent);
  console.log(req.body.data.levelMillivolt);
  res.sendStatus(200);
})

module.exports = router;
