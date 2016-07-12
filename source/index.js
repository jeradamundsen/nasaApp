// api key nasa
// zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk


//https://api.nasa.gov/planetary/apod?api_key=zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk
var express= require ('express');
var bodyParser= require('body-parser')
var mongoose= require('mongoose');
var port= 8010;

var masterRoutes = require('./server/masterRoutes')
var UserControllers= require('.Controllers/UserController')

var app = express();

app.use(bodyParser.json());


app.post('/users', UserController.create);

app.listen(port, function(){
  console.log('Express listening on '+ port)
})
