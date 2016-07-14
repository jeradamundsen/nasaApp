var mongoose = require('mongoose');

var schema = new mongoose.Schema({
location_observed_at:{type: String},
direction_facing: {type: Number, min:0, max:360},
date: {type:String},
height_above_horizon: {type: Number},
brightness: {type: Number, min:-4, max:-28 },
color: {type: String},
asssociated_sounds: {type:String},
visual: {type: String}
})

module.exports = mongoose.model('Fireballs', schema)



// where observed
// direction facing 0-360
// how high from horizon angle 0-180
// date dirty
//bightness -4 to -28  bright as moon in middle as sun -28
//color
// sounds associated with it  concurrent or delayed
// smoke trail /train
// terminal flash
