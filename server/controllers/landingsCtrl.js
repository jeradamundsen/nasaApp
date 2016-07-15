var Landings = require('../models/Landings')


module.exports = {

create: function(req, res){
  req.body.year= req.body.year.split('-')[0]
  Landings.insert(req.body, function(err, result){
    if ( err ) {
        return res.status( 500 ).json( err );
    } else{
      res.json(result);
    }
  })
},

getMany: function(req, res){
  Landings.read(req.body, function(err,result){
    if ( err ) {
        return res.status( 500 ).json( err );
    }else{
      res.json(result);
    }
  })
},

update: function(req, res){
  Landings.update(req.params.id, req.body, function(err, result){
    if ( err ) {
        return res.status( 500 ).json( err );
    }else{
      res.json(result);
    }
  })
},

updateMany: function( req, res){
console.log(req.body.landingList[0]);
  for(var i=0; i<req.body.landingList.length; i++){
    new Landings({
      latitude:req.body.landingList[i].latitude,
      longitude:req.body.landingList[i].longitude,
      name:req.body.landingList[i].name
    }, function(err, result){
      if ( err ) {
          return res.status( 500 ).json( err );
      }


    })

  }
  Landings.find(function(err, response){
    return res.json(response);
  })
},

deleteById: function(req, res){
  Landings.delete(req.params.id, req.body, function(err,result){
    if ( err ) {
        return res.status( 500 ).json( err );
    }else{
      res.json(result);
    }
  })
}

}
