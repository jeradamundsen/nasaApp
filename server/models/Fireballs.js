var mongoose = require('mongoose');
var schema = require('./User.js')
var Landingsschema = require('./Landings.js')

var Fireballschema = new mongoose.Schema({
// // location_observed_at: {geo_location:{
// //   longitude: {type: Number},
// //   latitude: {type: Number}
// // }
// },
address: {type: String},
direction_facing: {type: Number, min:0, max:360},
date: {type: Date},
height_above_horizon: {type: Number},
brightness: {type: Number, min:-4, max:-28 },
color: {type: String},
asssociated_sounds: {type:String},
visual: {type: String},
reportedBy: [

    { type: mongoose.Schema.Types.ObjectId, ref:'User'}
  ],

meteorite_landings_same_year: [
  { type: mongoose.Schema.Types.ObjectId, ref:'Landings'}
]
})

module.exports = mongoose.model('Fireballs', Fireballschema)



// where observed
// direction facing 0-360
// how high from horizon angle 0-180
// date dirty
//bightness -4 to -28  bright as moon in middle as sun -28
//color
// sounds associated with it  concurrent or delayed
// smoke trail /train
// terminal flash
