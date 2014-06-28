'use strict';

/**
 * @ngdoc overview
 * @name angularYeomanGeneratorApp
 * @description
 * # angularYeomanGeneratorApp
 *
 * Main module of the application.
 */
angular
  .module('angularYeomanGeneratorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'fx.animations'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .when('/padronElectoral', {
        templateUrl: 'views/padronelectoral.html',
        controller: 'PadronelectoralCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
