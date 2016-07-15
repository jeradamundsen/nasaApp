var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  date: {type: Number},
  latitude:{type: Number, required: true},
  longitude:{type: Number, required: true},
  name: {type: String, required: true},
  mass: {type: Number},


})

module.exports = mongoose.model('Landings', schema)
