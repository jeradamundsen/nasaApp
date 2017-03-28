

var jquery = require('jquery');
var bootstrap = require('bootstrap');
var angular = require('angular');
var uiRouter = require('angular-ui-router')
var routing = require('./app.config');
var styles = require('./styles/styles.css')
var home = require('./features/home');
var hubble = require('./features/hubble');
var fireballs = require('./features/fireballs');
// var meteors = require('./features/meteors');

angular.module('nasaApp', [ uiRouter, home, fireballs, hubble ])
  .config(routing)
