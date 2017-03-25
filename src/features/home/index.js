var angular = require('angular')
var uiRouter = require('angular-ui-router')
var routing = require('./home.routes')
module.exports = angular.module('nasaApp.home',[uiRouter])
  .config(routing)
  .name;
