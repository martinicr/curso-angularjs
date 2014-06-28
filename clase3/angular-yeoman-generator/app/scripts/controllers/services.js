'use strict';

/**
 * @ngdoc function
 * @name angularYeomanGeneratorApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the angularYeomanGeneratorApp
 */
angular.module('angularYeomanGeneratorApp')
  .controller('ServicesCtrl', function ($scope, SoccerService) {

    $scope.teams = SoccerService.teams();

  });
