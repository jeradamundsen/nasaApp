var User= require('../models/User')


module.exports = {

create: function(req, res) {
  console.log(req.body)
  User.create(req.body, function(err,result){
    if ( err ) {
      return res.status( 500 ).json( err );
    }else {
    res.json(result);
    }
  })
},

update: function(req, res){
  User.update(req.params.id, req.body, function(err, result){
    if ( err ) {
        return res.status( 500 ).json( err );
    }else{
      res.json(result);
    }
  })
},

delete: function(req, res){
  User.delete(req.params.id, req.body, function(err, result){
    if ( err ) {
        return res.status( 500 ).json( err );
    }else{
      res.json(result);
    }
  })
}

} // closes module.exports
