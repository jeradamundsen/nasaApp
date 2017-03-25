var angular = require('angular');
var uiRouter = require('angular-ui-router')
var routing = require('./fireball.routes');
var fireballsCtrl = require('./fireballsCtrl');
var fireballsService = require('../../services/fireball.service');



module.exports = angular.module('nasaApp.fireball', [uiRouter, fireballsService])
  .config(routing)
  .controller('fireballsCtrl', fireballsCtrl )
  .name;
