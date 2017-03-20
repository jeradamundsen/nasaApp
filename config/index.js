var configValues = require('./config');

module.exports = {
  getDbConnectionString: function(){
    return 'mongodb://' + configValues.usrname + ':' + configValues.pwd + '@ds029735.mlab.com:29735/spaceshipdb'
  }
}
