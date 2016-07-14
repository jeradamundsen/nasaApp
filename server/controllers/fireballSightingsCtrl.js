var Fireballs = require('../models/Fireballs')

module.exports = {

createReport: function(req, res){
  Fireballs.create(req.body, function(err, result){

    console.log(req.body)
    if ( err ) {
        return res.status( 500 ).json( err );
    } else{
      res.json(result);
    }
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
