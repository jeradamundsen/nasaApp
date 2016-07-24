var Fireballs = require('../models/Fireballs')
var User = require('../models/User.js')
module.exports = {

 getReports: function(req,res){
   Fireballs.find({},function(err, result){

    // return res.status(200).json(result)
   })
   .populate("reportedBy")
   .exec(function(err,fireballpopulated){

     return res.status(200).json(fireballpopulated);
   })
 },


createReport: function(req, res){
  Fireballs.create(req.body, function(err, result){
    if ( err ) {
        return res.status( 500 ).json( err );
    }
    return res.status(200).json(result)
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
