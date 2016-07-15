var Fireballs = require('../models/Fireballs')
var User = require('../models/User.js')
module.exports = {

createReport: function(req, res){
  Fireballs.create(req.body.report, function(err, result){
    User.findById(req.body._id, function(err, userfound){
      result.reportedBy.push(userfound)
    })
    console.log(req.body)
    if ( err ) {
        return res.status( 500 ).json( err );
    }
    result.save((err, resultSaved)=>{
    })
    Fireballs.findById(resultSaved._id, function(err,fireBallFound){})
    .populate('reportedBy')
    .exec((err, fireBallPop)=>{
      return res.json(fireBallPop);
    })
  })

},

getMany: function(req, res){
  Fireballs.read(req.body, function(err, result){
    if ( err ) {
        return res.status( 500 ).json( err );
    } else {
      res.json(result);
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
