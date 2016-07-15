var mongoose = require('mongoose');
var Fireballs =require('mongoose');
var schema = new mongoose.Schema ({
  name: {type: String, required: true},
  email: {type: String, required: true},
  fireballs: [

      { type: mongoose.Schema.Types.ObjectId, ref:'Fireballs'}
    ],
})

module.exports = mongoose.model('User', schema)
