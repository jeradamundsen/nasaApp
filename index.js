var express= require ('express');
var bodyParser= require('body-parser')
var mongoose= require('mongoose');
var UserController = require('./server/controllers/UserController');
var landingsCtrl = require('./server/controllers/landingsCtrl');
var fireballSightingsCtrl = require('./server/controllers/fireballSightingsCtrl');
var config = require('./config');
var app = express();
var port= process.env.PORT || 9797;

 // const mongoURI= `mongodb://localhost:27017/nasaApp`;
 // future database name currently called test

app.use( express.static( __dirname + "/Public") );
app.use(bodyParser.json());

mongoose.connect(config.getDbConnectionString());
mongoose.connection.once(`open`,function(){
  console.log(`Connected to mongo at: `, config.getDbConnectionString())
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
  .get(fireballSightingsCtrl.getReports)
  .put(fireballSightingsCtrl.update)
  .delete(fireballSightingsCtrl.deleteById)







app.listen(port, function(){
  console.log('Express listening on '+ port)
})
