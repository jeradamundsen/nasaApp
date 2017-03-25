'use strict';

var jquery = require('jquery');
var bootstrap = require('bootstrap');
var angular = require('angular');
var uiRouter = require('angular-ui-router')
var routing = require('./app.config');

var styles = require('./styles/styles.css')
var fireballs = require('./features/fireballs');
// var meteors = require('./features/meteors');

angular.module('nasaApp', [ uiRouter,fireballs ])
  .config(routing)
