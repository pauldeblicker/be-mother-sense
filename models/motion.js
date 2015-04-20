var mongoose = require('mongoose');

var motionSchema = mongoose.Schema({
  cookie: String,
  date: Date,
  intensity: Integer,
  duration: Integer,
  value: Integer
}, { collection: 'motions' });

module.exports = mongoose.model('motion', motionSchema);
