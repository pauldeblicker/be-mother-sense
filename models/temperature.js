var mongoose = require('mongoose');

var temperatureSchema = mongoose.Schema({
  cookie: String,
  date: Date,
  value: Double
}, { collection: 'temperatures' });

module.exports = mongoose.model('temperature', temperatureSchema);
