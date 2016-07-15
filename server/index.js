// api key nasa
// zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk


//https://api.nasa.gov/planetary/apod?api_key=zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk
var express= require ('express');
var bodyParser= require('body-parser')
var mongoose= require('mongoose');
var UserController = require('./controllers/UserController');
var landingsCtrl = require('./controllers/landingsCtrl');
var fireballSightingsCtrl = require('./controllers/fireballSightingsCtrl');

var app = express();
var port= 9797;
const mongoURI= `mongodb://localhost:27017`;
// const mongoURI= `mongodb://localhost:27017/nasaApp`;future database name currently called test
app.use( express.static( __dirname + "./../Public") );
app.use(bodyParser.json());

mongoose.connect(mongoURI);
mongoose.connection.once(`open`,function(){
  console.log(`Connected to mongo at: `, mongoURI)
})





// endpoints
app.route('/api/user')
  .post(UserController.create)
  .put(UserController.update)
  .delete(UserController.delete);


app.route('/api/landings')
  .post(landingsCtrl.create)
  .get(landingsCtrl.getMany)
  .put(landingsCtrl.update)
  .delete(landingsCtrl.deleteById)

app.route('/api/landingsOld').put(landingsCtrl.updateMany)

app.route('/api/sightings')
  .post(fireballSightingsCtrl.createReport)
  .get(fireballSightingsCtrl.getAllFireballs)
  .put(fireballSightingsCtrl.update)
  .delete(fireballSightingsCtrl.deleteById)






app.listen(port, function(){
  console.log('Express listening on '+ port)
})
