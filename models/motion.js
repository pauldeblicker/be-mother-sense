var mongoose = require('mongoose');

var motionSchema = mongoose.Schema({
  cookie: String,
  date: Date,
  intensity: Number,
  duration: Number,
  value: Number
}, { collection: 'motions' });

module.exports = mongoose.model('motion', motionSchema);
