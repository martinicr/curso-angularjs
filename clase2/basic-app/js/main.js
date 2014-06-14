
var module =  angular.module('curso2Angular', []);

var datos = {
	cedula: "1 1111 1111",
	nombre: "John",
	apellido: "Doe",
	direccion: "San Jose",
};


//Forma simple
/*
function twoWayDataBindingController($scope){

	$scope.variableBind = "Mundo";
	$scope.datos = datos;

	$scope.showData = function($scope){
		console.log(JSON.stringify(datos));
	}
}
*/


//Forma modular
module.controller('twoWayDataBindingController', function($scope){

	$scope.variableBind = "Mundo";
	$scope.datos = datos;

	$scope.showData = function($scope){
		console.log(JSON.stringify(datos));
	}
});



