var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  year: {type: Number, required: true},
  latitude:{type: Number, required: true},
  longitude:{type: Number, required: true},
  name: {type: String},
  mass: {type: Number}
})

module.exports = mongoose.model('Landings', schema)
