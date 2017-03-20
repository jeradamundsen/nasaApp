'use strict';


var  bootstrap = require('bootstrap');
var angular = require('angular');
var uiRouter = require('angular-ui-router')
var routing = require('./app.config');
var styles = require('./styles/styles.css')
var fireballs = require('./features/fireballs');
var meteoriteLandings = require('./features/meteoriteLandings');

angular.module('nasaApp', [ uiRouter,meteoriteLandings,fireballs ])
  .config(routing)
