var Fireballs = require('../models/Fireballs')
var User = require('../models/User.js')
module.exports = {

createReport: function(req, res){
  Fireballs.create(req.body, function(err, result){
    if ( err ) {
        return res.status( 500 ).json( err );
    }
    return res.status(200).json(result)
    })
},
// getFireballByUserId: function(req, res){
//   Fireballs.find({"fireballs":req.params.id}, function(err,fireBallFound){})
//   .populate('reportedBy')
//   .exec((err, fireBallPop)=>{
//     return res.json(fireBallPop);
// }
getAllFireballs: function(req, res){
  Fireballs.find({})
   .populate('reportedBy')
  .exec(function(err, result){
    if ( err ) {
        return res.status( 500 ).json( err );
    } else {
      return res.json(result);
    }
  })
},

update: function(req, res){
  Fireballs.update(req.params.id, req.body, function(err, result){
    if ( err ) {
        return res.status( 500 ).json( err );
    } else {
      res.json(result);
    }
  })
},

deleteById: function(req, res){
  Fireballs.delete(req.params.id, req.body, function(err, result){
    if ( err ) {
        return res.status( 500 ).json( err );
    } else{
      res.json(result);
    }
  })
}

}
