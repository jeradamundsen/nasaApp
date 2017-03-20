var angular = require('angular');
var uiRouter = require('angular-ui-router')
var routing = require('./fireball.routes');
var fireballCtrl = require('./fireballCtrl');
var mainService = require('../../services/mainService')

module.exports = angular.module('app.home', [uiRouter, mainService])
  .config(routing)
  .controller('fireballCtrl', fireballCtrl )
  .name;
