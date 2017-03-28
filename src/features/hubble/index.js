var angular = require('angular');
var uiRouter = require('angular-ui-router')
var routing = require('./hubble.routes');
var hubbleCtrl = require('./hubbleCtrl');
var hubbleService = require('../../services/hubble.service');

module.exports = angular.module('nasaApp.hubble', [uiRouter, hubbleService])
  .config(routing)
  .controller('hubbleCtrl', hubbleCtrl)
  .name;
