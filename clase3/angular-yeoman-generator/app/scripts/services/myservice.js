'use strict';

/**
 * @ngdoc service
 * @name angularYeomanGeneratorApp.Myservice
 * @description
 * # Myservice
 * Service in the angularYeomanGeneratorApp.
 */
angular.module('angularYeomanGeneratorApp')
  .service('SoccerService', function SoccerService($http, $q) {
    
  	return {
  		teams: function(){
  			return [
  				{name:'Costa Rica', points: 6},
  				{name:'Italy', points: 3},
  				{name:'Uruguay', points: 3},
  				{name:'England', points: 0}
  			];	
  		},

  		findByCedula: function(cedula){

  		}
  	}


  });
