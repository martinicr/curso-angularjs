
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
module.controller('twoWayDataBindingController', function($scope, datosFactory){

	$scope.variableBind = "Mundo";
	$scope.usuario = {};
	$scope.usuarios = datosFactory.listarContactos();

	$scope.showData = function($scope){
		return datosFactory.listarContactos();
	}

	$scope.guardar = function(usuario){
		datosFactory.guardarContacto(usuario);
		$scope.showSuccess = true;
		$scope.usuario = {};
	}

	$scope.eliminarUsuario = function(usuario){
		//Pasar esto al factory
		var idx = $scope.usuarios.indexOf(usuario);
		$scope.usuarios.splice(idx, 1);
	}

	$scope.closeSuccessMessage = function(){
		$scope.showSuccess = false;
	}
});


module.factory('datosFactory', function(){

	var usuariosList = [];

	return {

		guardarContacto: function(usuario){
			usuariosList.push(usuario);
		},

		listarContactos: function(){
			return usuariosList;
		},

		eliminarContacto: function(usuario){
			var idx = usuariosList.indexOf(usuario);
			return usuariosList.splice(0, idx);	
		}

	}

});

module.controller('calculadoraController', function($scope, calculadoraService){

	$scope.numero1 = 0;
	$scope.numero2 = 0;

	$scope.sumar = function(){
		$scope.resultadoSuma = calculadoraService.suma($scope.numero1, $scope.numero2);
		initFields();
	}

	$scope.multiplicar = function(){
		$scope.resultadoMultiplicacion = calculadoraService.multiplica($scope.numero1, $scope.numero2);
		initFields();
	}

	$scope.initFields = function(){
		$scope.numero1 = 0;
		$scope.numero2 = 0;
	}

});


module.factory('calculadoraService', function(){

	return {
		suma : function(a, b){
			return parseInt(a) + parseInt(b);
		},

		multiplica : function(a, b){
			return parseInt(a) * parseInt(b);
		}
	}

});


