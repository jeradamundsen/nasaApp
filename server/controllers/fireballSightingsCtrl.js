var Fireballs = require('../models/Fireballs')

module.exports = {

create: function(req, res){
  Fireballs.insert(req.body, function(err, result){
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
  }
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
