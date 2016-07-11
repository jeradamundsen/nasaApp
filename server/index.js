

var express= require ('express');
var bodyParser= require('body-parser')
var mongoose= require('mongoose');
var masterRoutes = require('./server/masterRoutes')

var app = express();
var port= 8010;
const mongoUri= `mongoUri://localhost:27017`;



mongoose.connect(mongoUri);
mongoose.connection.once(`open`,function(){
  console.log(`Connected to mongo at ` + mongoUri)
})



app.use(bodyParser.json());


app.post('/users', UserController.create);

app.listen(port, function(){
  console.log('Express listening on '+ port)
})
